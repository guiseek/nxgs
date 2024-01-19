import { exec as nodeExec } from 'node:child_process';
import { ExecOptions } from '../types';

class ExecError extends Error {
  constructor(value: string, public stdout: string, public stderr: string) {
    const message = [value, stdout, stderr].filter(Boolean).join('\n');
    super(message);
  }
}

export function exec(
  command: string,
  { verbose = false, ...options }: ExecOptions = {}
) {
  return new Promise<string>((resolve, reject) => {
    const optionsWithEnv = { env: process.env, ...options };
    const result = nodeExec(
      command,
      optionsWithEnv,
      (error, stdout, stderr) => {
        if (error && typeof error.message === 'string')
          reject(new ExecError(error.message, stdout, stderr));
        resolve(stdout.trim().concat(stderr.trim()));
      }
    );

    if (verbose) {
      result.stdout?.pipe(process.stdout);
      result.stderr?.pipe(process.stderr);
      result.stdin?.pipe(process.stdin);
    }
  });
}
