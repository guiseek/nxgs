import { createConfig, addCommitEnforceDependencies } from './lib';
import type { InitReleaseOptions } from './schema';
import {
  logger,
  type Tree,
  formatFiles,
  installPackagesTask,
} from '@nx/devkit';

export async function initGenerator(tree: Tree, options: InitReleaseOptions) {
  if (options.enforceConventionalCommits) {
    addCommitEnforceDependencies(tree);
  }

  createConfig(tree, options);

  await formatFiles(tree);

  if (options.enforceConventionalCommits) {
    logger.log('Installing dependencies...');

    installPackagesTask(tree);
  }
}

export default initGenerator;
