import { CreationalOptions, NormalizedCreationalOptions } from '../schema';
import { Tree, names, readProjectConfiguration } from '@nx/devkit';
import { join } from 'path';

export function normalizeOptions(
  tree: Tree,
  { project, ...options }: CreationalOptions
): NormalizedCreationalOptions {
  const { fileName: directory } = names(options.directory ?? options.name);

  const normalizedOptions = {
    ...options,
    ...names(options.name),
    directory,
  };

  if (project) {
    const { sourceRoot } = readProjectConfiguration(tree, project);

    if (sourceRoot) normalizedOptions.directory = join(sourceRoot, directory);
  }

  return normalizedOptions;
}
