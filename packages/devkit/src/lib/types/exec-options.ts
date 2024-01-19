import { ExecOptions as NodeExecOptions } from 'node:child_process';

export interface ExecOptions extends NodeExecOptions {
  verbose?: boolean;
}
