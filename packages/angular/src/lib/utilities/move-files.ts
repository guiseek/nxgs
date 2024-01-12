import { NormalizedOptions } from '../interfaces';
import { Tree, generateFiles } from '@nx/devkit';
import { join } from 'path';

export function moveFiles<T extends string = string>(
  tree: Tree,
  dirname: string,
  { directory, example, ...options }: NormalizedOptions<T>
) {
  const srcFolder = example
    ? join(dirname, 'files', example)
    : join(dirname, 'files');

  generateFiles(tree, srcFolder, directory, options);
}
