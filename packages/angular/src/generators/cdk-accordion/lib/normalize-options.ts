import { CdkAccordionOptions, NormalizedCdkAccordionOptions } from '../schema';
import { readAngularProjectConfiguration } from '../../utilities';
import { Tree, names } from '@nx/devkit';
import { join } from 'path';

function readPrefixAndSource(tree: Tree, projectName: string) {
  return readAngularProjectConfiguration(tree, projectName);
}

export function normalizeOptions(
  tree: Tree,
  { project, ...options }: CdkAccordionOptions
): NormalizedCdkAccordionOptions {
  const { fileName: directory } = names(options.directory ?? options.name);

  const prefix = 'cdk';
  const nNames = names(options.name);
  const normalizedOptions = { ...options, ...nNames, prefix, directory };

  if (project) {
    const { prefix, sourceRoot } = readPrefixAndSource(tree, project);

    if (prefix) normalizedOptions.prefix = prefix;

    if (sourceRoot) normalizedOptions.directory = join(sourceRoot, directory);
  }

  return normalizedOptions;
}
