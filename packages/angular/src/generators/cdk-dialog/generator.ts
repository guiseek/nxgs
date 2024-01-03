import { normalizeOptions } from './lib/normalize-options';
import { generateAndMoveFiles } from '../utilities';
import { Tree, formatFiles } from '@nx/devkit';
import { CdkDialogOptions } from './schema';
import { join } from 'path';

export async function cdkDialogGenerator(
  tree: Tree,
  options: CdkDialogOptions
) {
  const normalizedOptions = normalizeOptions(tree, options);

  const srcFolder = join(__dirname, 'files', normalizedOptions.example);

  generateAndMoveFiles(tree, srcFolder, normalizedOptions);

  await formatFiles(tree);
}

export default cdkDialogGenerator;
