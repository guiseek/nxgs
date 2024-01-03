import { readAngularProjectConfiguration } from '../../utilities';
import { Tree, names } from '@nx/devkit';
import { join } from 'path';
import {
  CdkTreeOptions,
  CdkTreeTechnique,
  NormalizedCdkTreeOptions,
} from '../schema';

function readPrefixAndSource(tree: Tree, projectName: string) {
  return readAngularProjectConfiguration(tree, projectName);
}

export function normalizeOptions(
  tree: Tree,
  { project, ...options }: CdkTreeOptions
): NormalizedCdkTreeOptions {
  const { fileName: directory } = names(options.directory ?? options.name);

  const prefix = 'cdk';
  const technique: CdkTreeTechnique = options.technique ?? 'flat';
  const nNames = names(options.name);
  const normalizedOptions = {
    ...options,
    ...nNames,
    prefix,
    technique,
    directory,
  };

  if (project) {
    const { prefix, sourceRoot } = readPrefixAndSource(tree, project);

    if (prefix) normalizedOptions.prefix = prefix;

    if (sourceRoot) normalizedOptions.directory = join(sourceRoot, directory);
  }

  return normalizedOptions;
}
