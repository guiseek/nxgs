import type { ReleaseOptions } from '../../../lib/types';
import type { InitReleaseOptions } from '../schema';
import { Tree, writeJson } from '@nx/devkit';

export const generatedConfigFileName = '.nxreleaserc.json';

export function createConfig(tree: Tree, options: InitReleaseOptions) {
  const config: ReleaseOptions = {
    npm: true,
    github: options.github,
    changelog: options.changelog,
    repositoryUrl: options.repositoryUrl,
    branches: [options.baseBranch],
  };

  writeJson(tree, generatedConfigFileName, config);
}
