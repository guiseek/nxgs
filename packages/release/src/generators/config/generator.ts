import {
  Tree,
  workspaceRoot,
  readProjectConfiguration,
  updateProjectConfiguration,
} from '@nx/devkit';
import { replaceOptions } from '../../lib/utilities';
import type { ConfigOptions } from './schema';
import { relative } from 'node:path';

export async function configGenerator(
  tree: Tree,
  { projectName, ...options }: ConfigOptions
) {
  const projectConfig = readProjectConfiguration(tree, projectName);

  const semanticReleaseConfig = replaceOptions(options, {
    projectName,
    projectDir: projectConfig.root,
    relativeProjectDir: relative(workspaceRoot, projectConfig.root),
    workspaceDir: workspaceRoot,
  });

  updateProjectConfiguration(tree, projectName, {
    ...projectConfig,
    targets: {
      ...projectConfig.targets,
      release: {
        executor: `@nxgs/release:release`,
        options: semanticReleaseConfig,
      },
    },
  });
}

export default configGenerator;
