import { exec } from '../dist/packages/devkit';
import { logger } from '@nx/devkit';
import { config } from 'dotenv';

config();

async function main() {
  logger.log('Starting package release...');

  await exec('npm link dist/packages/release');
  await exec('npm install');

  await exec('npx nx affected -t release', {
    verbose: true,
  });

  logger.log('Package released!');
}

main().catch((error) => {
  logger.error(error);
  process.exit(1);
});
