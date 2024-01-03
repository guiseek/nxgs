import { normalizeOptions } from './lib/normalize-options';
import { generateAndMoveFiles } from '../utilities';
import { Tree, formatFiles } from '@nx/devkit';
import { CdkTreeOptions } from './schema';
import { join } from 'path';

export async function cdkTreeGenerator(tree: Tree, options: CdkTreeOptions) {
  if (!options.name) throw new Error('Missing name');
  if (!options.technique) throw new Error('Missing technique');

  const normalizedOptions = normalizeOptions(tree, options);

  const srcFolder = join(__dirname, 'files', normalizedOptions.technique);

  generateAndMoveFiles(tree, srcFolder, normalizedOptions);

  await formatFiles(tree);
}

export default cdkTreeGenerator;
