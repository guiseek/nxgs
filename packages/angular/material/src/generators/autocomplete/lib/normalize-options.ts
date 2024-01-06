import { readAngularProjectConfiguration } from '../../../../../src/generators/utilities';
import { Tree, names } from '@nx/devkit';
import { join } from 'path';
import {
  MatAutocompleteOptions,
  MatAutocompleteExample,
  NormalizedMatAutocompleteOptions,
} from '../schema';

function readPrefixAndSource(tree: Tree, projectName: string) {
  return readAngularProjectConfiguration(tree, projectName);
}

export function normalizeOptions(
  tree: Tree,
  { project, ...options }: MatAutocompleteOptions
): NormalizedMatAutocompleteOptions {
  const { fileName: directory } = names(options.directory ?? options.name);

  const prefix = options.name.toLowerCase() !== 'autocomplete' ? 'mat' : 'mat2';

  const example: MatAutocompleteExample = options.example ?? 'filter';

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
