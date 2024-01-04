import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { getComponentPaths } from '../utilities';
import { CdkOptions } from '../interfaces';

import { cdkListboxGenerator, CdkListboxExample } from './generator';

describe('listbox generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate active-descendant example', async () => {
    const options: CdkOptions<CdkListboxExample> = {
      name: 'test',
      example: 'active-descendant',
    };

    await cdkListboxGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(path.component).toBeDefined();
  });

  it('should generate complex-object-values example', async () => {
    const options: CdkOptions<CdkListboxExample> = {
      name: 'test',
      example: 'complex-object-values',
    };

    await cdkListboxGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(path.component).toBeDefined();
  });

  it('should generate custom-typeahead example', async () => {
    const options: CdkOptions<CdkListboxExample> = {
      name: 'test',
      example: 'custom-typeahead',
    };

    await cdkListboxGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(path.component).toBeDefined();
  });
});
