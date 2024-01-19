import {
  Tree,
  readJson,
  workspaceRoot,
  readProjectConfiguration,
  updateProjectConfiguration,
} from '@nx/devkit';
import type { PackageJson } from 'nx/src/utils/package-json';
import { replaceOptions } from '../../lib/utilities';
import type { ConfigOptions } from './schema';
import { join, relative } from 'node:path';

const root = join(__dirname, '..', '..', '..');

export async function configGenerator(
  tree: Tree,
  { projectName, ...options }: ConfigOptions
) {
  const { executors } = readJson(tree, join(root, 'executors.json'));

  const projectConfig = readProjectConfiguration(tree, projectName);

  const semanticReleaseConfig = replaceOptions(options, {
    projectName,
    projectDir: projectConfig.root,
    relativeProjectDir: relative(workspaceRoot, projectConfig.root),
    workspaceDir: workspaceRoot,
  });

  const { name } = readJson<PackageJson>(tree, join(root, 'package.json'));
  const [executor] = Object.keys(executors) ?? [];

  updateProjectConfiguration(tree, projectName, {
    ...projectConfig,
    targets: {
      ...projectConfig.targets,
      release: {
        executor: `${name}:${executor}`,
        options: semanticReleaseConfig,
      },
    },
  });
}

export default configGenerator;
