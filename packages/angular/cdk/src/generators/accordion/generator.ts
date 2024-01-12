import { Options, moveFiles, normalize } from '@nxgs/angular';
import { Tree, formatFiles } from '@nx/devkit';

const normalizeOptions = normalize({
  prefix: 'cdk',
});

export async function cdkAccordionGenerator(tree: Tree, options: Options) {
  moveFiles(tree, __dirname, normalizeOptions(tree, options));

  await formatFiles(tree);
}

export default cdkAccordionGenerator;
