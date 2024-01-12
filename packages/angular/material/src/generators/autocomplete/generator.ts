import { Options, moveFiles, normalize } from '@nxgs/angular';
import { Tree, formatFiles } from '@nx/devkit';

export type MatAutocompleteExample = 'filter';

const normalizeOptions = normalize<MatAutocompleteExample>({
  prefix: 'mat',
  exampleDefault: 'filter',
});

export async function autocompleteGenerator(
  tree: Tree,
  options: Options<MatAutocompleteExample>
) {
  const normalizedOptions = normalizeOptions(tree, options);

  moveFiles(tree, __dirname, normalizedOptions);

  await formatFiles(tree);
}

export default autocompleteGenerator;
