import { PatternOptions, StructurallPattern } from '../../interfaces';
import { Tree, formatFiles, generateFiles } from '@nx/devkit';
import { normalizeOptions } from '../../utilities';
import { join } from 'path';

export async function structuralGenerator(
  tree: Tree,
  options: PatternOptions<StructurallPattern>
) {
  const { directory, ...normalizedOptions } = normalizeOptions(tree, options);

  const srcFolder = join(__dirname, 'files', normalizedOptions.pattern);

  generateFiles(tree, srcFolder, directory, normalizedOptions);

  await formatFiles(tree);
}

export default structuralGenerator;
