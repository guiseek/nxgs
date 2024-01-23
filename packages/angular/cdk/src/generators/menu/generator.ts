import { Options, moveFiles, normalize } from '../../../../src';
import { Tree, formatFiles } from '@nx/devkit';

export type CdkMenuExample =
  | 'inline-menu'
  | 'menu-bar'
  | 'context-menu'
  | 'nested-context-menus'
  | 'menu-standalone-trigger'
  | 'stateful-menu-standalone-trigger';

const normalizeOptions = normalize<CdkMenuExample>({
  prefix: 'cdk',
  exampleDefault: 'inline-menu',
});

export async function cdkMenuGenerator(
  tree: Tree,
  options: Options<CdkMenuExample>
) {
  moveFiles(tree, __dirname, normalizeOptions(tree, options));

  await formatFiles(tree);
}

export default cdkMenuGenerator;
