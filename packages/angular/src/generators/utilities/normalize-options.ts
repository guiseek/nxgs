import { CdkOptions, NormalizedCdkOptions } from '../interfaces';
import { readAngularProjectConfiguration } from '../utilities';
import { Tree, names } from '@nx/devkit';
import { join } from 'path';

function readPrefixAndSource(tree: Tree, projectName: string) {
  return readAngularProjectConfiguration(tree, projectName);
}

export function normalizeOptions<T extends string>(
  tree: Tree,
  { project, ...options }: CdkOptions<T>,
  exampleDefault: T
): NormalizedCdkOptions<T> {
  const { fileName: directory } = names(options.directory ?? options.name);

  const prefix = 'cdk';
  const example: T = options.example ?? exampleDefault;
  const nNames = names(options.name);
  const normalizedOptions = {
    ...options,
    ...nNames,
    prefix,
    example,
    directory,
  };

  if (project) {
    const { prefix, sourceRoot } = readPrefixAndSource(tree, project);

    if (prefix) normalizedOptions.prefix = prefix;

    if (sourceRoot) normalizedOptions.directory = join(sourceRoot, directory);
  }

  return normalizedOptions;
}
