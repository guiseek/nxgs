import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Options, getComponentPaths } from '../../../../src';
import { CdkMenuExample, cdkMenuGenerator } from './generator';
import { Tree } from '@nx/devkit';

describe('cdk-menu generator', () => {
  let tree: Tree;
  const options: Options<CdkMenuExample> = {
    name: 'test',
    example: 'inline-menu',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate inline-menu example', async () => {
    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate menu-bar example', async () => {
    options.example = 'menu-bar';
    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate context-menu example', async () => {
    options.example = 'context-menu';
    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate nested-context-menus example', async () => {
    options.example = 'nested-context-menus';

    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate menu-standalone-trigger example', async () => {
    options.example = 'menu-standalone-trigger';

    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate stateful-menu-standalone-trigger example', async () => {
    options.example = 'stateful-menu-standalone-trigger';

    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
