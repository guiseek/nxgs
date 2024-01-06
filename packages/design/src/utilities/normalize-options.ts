import { Tree, names, readProjectConfiguration } from '@nx/devkit';
import { join } from 'path';
import {
  Pattern,
  PatternOptions,
  NormalizedPatternOptions,
} from '../interfaces/pattern-options';

export function normalizeOptions<T extends Pattern>(
  tree: Tree,
  { project, ...options }: PatternOptions<T>
): NormalizedPatternOptions<T> {
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
