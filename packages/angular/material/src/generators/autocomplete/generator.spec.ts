import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { MatAutocompleteExample, autocompleteGenerator } from './generator';
import { Options, getComponentPaths } from '../../../../src';

describe('autocomplete generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate filter example', async () => {
    const options: Options<MatAutocompleteExample> = {
      name: 'city',
      example: 'filter',
    };

    await autocompleteGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
