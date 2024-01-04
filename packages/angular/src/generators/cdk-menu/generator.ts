import { normalizeOptions } from './lib/normalize-options';
import { generateAndMoveFiles } from '../utilities';
import { Tree, formatFiles } from '@nx/devkit';
import { CdkMenuOptions } from './schema';
import { join } from 'path';

export async function cdkMenuGenerator(tree: Tree, options: CdkMenuOptions) {
  const normalizedOptions = normalizeOptions(tree, options);

  const srcFolder = join(__dirname, 'files', normalizedOptions.example);

  generateAndMoveFiles(tree, srcFolder, normalizedOptions);

  await formatFiles(tree);
}

export default cdkMenuGenerator;
