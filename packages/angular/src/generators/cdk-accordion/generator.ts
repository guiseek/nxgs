import { join } from 'path';
import { generateAndMoveFiles } from './lib/generate-and-move-files';
import { normalizeOptions } from './lib/normalize-options';
import { CdkAccordionOptions } from './schema';
import { Tree, formatFiles } from '@nx/devkit';

export async function cdkAccordionGenerator(
  tree: Tree,
  options: CdkAccordionOptions
) {
  const normalizedOptions = normalizeOptions(tree, options);

  generateAndMoveFiles(tree, join(__dirname, 'files'), normalizedOptions);

  await formatFiles(tree);
}

export default cdkAccordionGenerator;
