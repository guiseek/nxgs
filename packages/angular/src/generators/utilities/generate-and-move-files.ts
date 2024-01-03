import { Tree, generateFiles } from '@nx/devkit';

export function generateAndMoveFiles<T extends { directory: string }>(
  tree: Tree,
  srcFolder: string,
  { directory, ...options }: T
) {
  generateFiles(tree, srcFolder, directory, options);
}
