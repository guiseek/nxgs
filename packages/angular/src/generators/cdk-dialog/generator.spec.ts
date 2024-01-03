import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { getComponentPaths } from '../utilities/testing';
import { cdkDialogGenerator } from './generator';
import { CdkDialogOptions } from './schema';
import { Tree } from '@nx/devkit';

describe('cdk-dialog generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate flat example', async () => {
    const options: CdkDialogOptions = { name: 'test', example: 'data' };
    await cdkDialogGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate overview example', async () => {
    const options: CdkDialogOptions = { name: 'test', example: 'overview' };
    await cdkDialogGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate styling example', async () => {
    const options: CdkDialogOptions = { name: 'test', example: 'styling' };
    await cdkDialogGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
