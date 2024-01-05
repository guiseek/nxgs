import { normalizeOptions } from './lib/normalize-options';
import { generateLibrary } from './lib/generate-library';
import { Tree, formatFiles } from '@nx/devkit';
import { LibraryOptions } from './schema';

export async function libraryGenerator(tree: Tree, options: LibraryOptions) {
  const normalizedOptions = normalizeOptions(options);

  await generateLibrary(tree, normalizedOptions);

  await formatFiles(tree);
}

export default libraryGenerator;
