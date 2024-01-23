import { Options, moveFiles, normalize } from '../../../../src';
import { Tree, formatFiles } from '@nx/devkit';

export type CdkTreeExample = 'flat' | 'nested';

const normalizeOptions = normalize<CdkTreeExample>({
  prefix: 'cdk',
  exampleDefault: 'flat',
});

export async function cdkTreeGenerator(
  tree: Tree,
  options: Options<CdkTreeExample>
) {
  moveFiles(tree, __dirname, normalizeOptions(tree, options));

  await formatFiles(tree);
}

export default cdkTreeGenerator;
