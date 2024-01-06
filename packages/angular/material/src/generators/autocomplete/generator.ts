import { Tree, formatFiles, generateFiles } from '@nx/devkit';
import { normalizeOptions } from './lib/normalize-options';
import { MatAutocompleteOptions } from './schema';
import * as path from 'path';

export async function autocompleteGenerator(
  tree: Tree,
  options: MatAutocompleteOptions
) {
  const { directory, ...normalizedOptions } = normalizeOptions(tree, options);

  const srcFolder = path.join(__dirname, 'files', normalizedOptions.example);

  generateFiles(tree, srcFolder, directory, normalizedOptions);

  await formatFiles(tree);
}

export default autocompleteGenerator;
