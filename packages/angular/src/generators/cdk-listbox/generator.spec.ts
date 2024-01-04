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

  it('should run successfully', async () => {
    const options: CdkOptions<CdkListboxExample> = {
      name: 'test',
      example: 'active-descendant',
    };

    await cdkListboxGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(path.component).toBeDefined();
  });
});
