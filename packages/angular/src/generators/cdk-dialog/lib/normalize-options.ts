import { readAngularProjectConfiguration } from '../../utilities';
import { Tree, names } from '@nx/devkit';
import { join } from 'path';
import {
  CdkDialogOptions,
  CdkDialogExample,
  NormalizedCdkDialogOptions,
} from '../schema';

function readPrefixAndSource(tree: Tree, projectName: string) {
  return readAngularProjectConfiguration(tree, projectName);
}

export function normalizeOptions(
  tree: Tree,
  { project, ...options }: CdkDialogOptions
): NormalizedCdkDialogOptions {
  const { fileName: directory } = names(options.directory ?? options.name);

  const prefix = 'cdk';
  const example: CdkDialogExample = options.example ?? 'data';
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
