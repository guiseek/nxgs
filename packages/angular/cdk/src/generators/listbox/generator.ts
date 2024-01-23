import { Options, moveFiles, normalize } from '../../../../src';
import { Tree, formatFiles } from '@nx/devkit';

export type CdkListboxExample =
  | 'basic'
  | 'active-descendant'
  | 'complex-object-values'
  | 'custom-typeahead';

const normalizeOptions = normalize<CdkListboxExample>({
  prefix: 'cdk',
  exampleDefault: 'basic',
});

export async function cdkListboxGenerator(
  tree: Tree,
  options: Options<CdkListboxExample>
) {
  moveFiles(tree, __dirname, normalizeOptions(tree, options));

  await formatFiles(tree);
}

export default cdkListboxGenerator;
