import { Tree, formatFiles, generateFiles } from '@nx/devkit';
import { normalizeOptions } from '../utilities';
import { CdkOptions } from '../interfaces';
import { join } from 'path';

export type CdkListboxExample = 'active-descendant';

export async function cdkListboxGenerator(
  tree: Tree,
  options: CdkOptions<CdkListboxExample>
) {
  const { directory, example, ...normalizedOptions } =
    normalizeOptions<CdkListboxExample>(tree, options, 'active-descendant');

  const srcFolder = join(__dirname, 'files', example);

  generateFiles(tree, srcFolder, directory, normalizedOptions);

  await formatFiles(tree);
}

export default cdkListboxGenerator;
