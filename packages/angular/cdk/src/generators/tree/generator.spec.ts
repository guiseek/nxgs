import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Options, getComponentPaths } from '../../../../src';
import { CdkTreeExample, cdkTreeGenerator } from './generator';
import { Tree } from '@nx/devkit';

describe('cdk-tree generator', () => {
  let tree: Tree;
  const options: Options<CdkTreeExample> = { name: 'test', example: 'flat' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate flat example', async () => {
    await cdkTreeGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate nested example', async () => {
    options.example = 'nested';
    await cdkTreeGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
