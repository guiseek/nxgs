import { Tree, formatFiles, generateFiles } from '@nx/devkit';
import { normalizeOptions } from './lib/normalize-options';
import { CreationalOptions } from './schema';
import { join } from 'path';

export async function creationalGenerator(
  tree: Tree,
  options: CreationalOptions
) {
  const { directory, ...normalizedOptions } = normalizeOptions(tree, options);

  const srcFolder = join(__dirname, 'files', normalizedOptions.pattern);

  generateFiles(tree, srcFolder, directory, normalizedOptions);

  await formatFiles(tree);
}

export default creationalGenerator;
