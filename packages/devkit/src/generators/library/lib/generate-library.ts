import { libraryGenerator as jsLibraryGenerator } from '@nx/js/src/generators/library/library';
import { libraryGenerator as angularLibraryGenerator } from '@nx/angular/generators';
import { libraryGenerator as reactLibraryGenerator } from '@nx/react';
import { LibraryOptions } from '../schema';
import { Tree } from '@nx/devkit';
import { Linter } from '@nx/eslint';

function generateFeatureLibrary(tree: Tree, options: Required<LibraryOptions>) {
  if (options.framework === 'react') {
    return reactLibraryGenerator(tree, {
      ...options,
      linter: Linter.EsLint,
      bundler: 'rollup',
      style: 'scss',
    });
  }

  if (options.framework === 'angular') {
    return angularLibraryGenerator(tree, options);
  }

  return jsLibraryGenerator(tree, options);
}

export function generateLibrary(tree: Tree, options: Required<LibraryOptions>) {
  switch (options.type) {
    case 'ui':
    case 'feature':
      return generateFeatureLibrary(tree, options);
    case 'utility':
    case 'data-access':
    default:
      return jsLibraryGenerator(tree, options);
  }
}
