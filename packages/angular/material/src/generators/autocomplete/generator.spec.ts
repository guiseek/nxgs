import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { getComponentPaths } from '../../../../src/generators/utilities';

import { autocompleteGenerator } from './generator';
import { MatAutocompleteOptions } from './schema';

describe('autocomplete generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate filter example', async () => {
    const options: MatAutocompleteOptions = { name: 'city', example: 'filter' };

    await autocompleteGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
