import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { getComponentPaths } from '../utilities/testing';
import { cdkTreeGenerator } from './generator';
import { CdkTreeOptions } from './schema';
import { Tree } from '@nx/devkit';

describe('cdk-tree generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate flat technique', async () => {
    const options: CdkTreeOptions = { name: 'test', technique: 'flat' };
    await cdkTreeGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate nested technique', async () => {
    const options: CdkTreeOptions = { name: 'test', technique: 'nested' };
    await cdkTreeGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
