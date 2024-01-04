import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { getComponentPaths } from '../utilities/testing';
import { cdkMenuGenerator } from './generator';
import { CdkMenuOptions } from './schema';

describe('cdk-menu generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate inline-menu example', async () => {
    const options: CdkMenuOptions = { name: 'test', example: 'inline-menu' };
    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate menu-bar example', async () => {
    const options: CdkMenuOptions = { name: 'test', example: 'menu-bar' };
    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate context-menu example', async () => {
    const options: CdkMenuOptions = { name: 'test', example: 'context-menu' };
    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate nested-context-menus example', async () => {
    const options: CdkMenuOptions = {
      name: 'test',
      example: 'nested-context-menus',
    };
    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate menu-standalone-trigger example', async () => {
    const options: CdkMenuOptions = {
      name: 'test',
      example: 'menu-standalone-trigger',
    };
    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate stateful-menu-standalone-trigger example', async () => {
    const options: CdkMenuOptions = {
      name: 'test',
      example: 'stateful-menu-standalone-trigger',
    };
    await cdkMenuGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
