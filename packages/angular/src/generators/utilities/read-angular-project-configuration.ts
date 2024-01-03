import type { AngularProjectConfiguration } from '@nx/angular/src/utils/types';
import { Tree, readProjectConfiguration } from '@nx/devkit';

export function readAngularProjectConfiguration(
  tree: Tree,
  projectName: string
) {
  return readProjectConfiguration(
    tree,
    projectName
  ) as AngularProjectConfiguration;
}
