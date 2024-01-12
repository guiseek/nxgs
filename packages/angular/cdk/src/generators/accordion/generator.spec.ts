import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { getComponentPaths } from '../../../../src';
import { cdkAccordionGenerator } from './generator';

describe('cdk-accordion generator', () => {
  let tree: Tree;
  const options = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await cdkAccordionGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should run successfully', async () => {
    const directory = 'dir';
    const opts = { ...options, directory };
    const path = getComponentPaths(opts);
    await cdkAccordionGenerator(tree, opts);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
