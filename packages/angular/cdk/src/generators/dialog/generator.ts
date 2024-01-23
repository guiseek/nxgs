import { Options, moveFiles, normalize } from '../../../../src';
import { Tree, formatFiles } from '@nx/devkit';

export type CdkDialogExample = 'data' | 'overview' | 'styling';

const normalizeOptions = normalize<CdkDialogExample>({
  prefix: 'cdk',
  exampleDefault: 'data',
});

export async function cdkDialogGenerator(
  tree: Tree,
  options: Options<CdkDialogExample>
) {
  moveFiles(tree, __dirname, normalizeOptions(tree, options));

  await formatFiles(tree);
}

export default cdkDialogGenerator;
