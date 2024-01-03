import { NormalizedCdkAccordionOptions } from '../schema';
import { Tree, generateFiles } from '@nx/devkit';

export function generateAndMoveFiles(
  tree: Tree,
  srcFolder: string,
  { directory, ...options }: NormalizedCdkAccordionOptions
) {
  generateFiles(tree, srcFolder, directory, options);
}
