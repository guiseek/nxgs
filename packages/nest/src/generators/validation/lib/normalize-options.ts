import { NormalizedValidationOptions, ValidationOptions } from '../schema';
import { Tree, readProjectConfiguration } from '@nx/devkit';
import { join } from 'node:path';

export function normalizeOptions(
  tree: Tree,
  { project = null, ...options }: ValidationOptions
): NormalizedValidationOptions {
  const normalizedOptions = { ...options, auto: !!options.auto };

  if (project) {
    const { sourceRoot } = readProjectConfiguration(tree, project);
    if (sourceRoot) {
      normalizedOptions.directory = join(
        sourceRoot,
        normalizedOptions.directory
      );
    }
  }

  return normalizedOptions;
}
