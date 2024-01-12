import { CdkDialogExample, cdkDialogGenerator } from './generator';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Options, getComponentPaths } from '../../../../src';
import { Tree } from '@nx/devkit';

describe('cdk-dialog generator', () => {
  let tree: Tree;
  const options: Options<CdkDialogExample> = {
    name: 'test',
    example: 'data',
  };
  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate flat example', async () => {
    await cdkDialogGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate overview example', async () => {
    options.example = 'overview';
    await cdkDialogGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate styling example', async () => {
    options.example = 'styling';
    await cdkDialogGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
