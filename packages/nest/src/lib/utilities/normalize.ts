import { NormalizedOptions, Options } from '../interfaces/options';
import { Tree, names, readProjectConfiguration } from '@nx/devkit';
import { join } from 'node:path';

interface NormalizeConfig {
  defaultDirectory: string;
}

export function normalize({ defaultDirectory }: NormalizeConfig) {
  return (tree: Tree, { project, ...options }: Options): NormalizedOptions => {
    const { fileName: directory } = names(
      options.directory ?? defaultDirectory
    );

    const normalized = {
      ...options,
      directory,
    };

    if (project) {
      const { sourceRoot } = readProjectConfiguration(tree, project);
      if (sourceRoot) {
        normalized.directory = join(sourceRoot, normalized.directory);
      }
    }

    return normalized;
  };
}
