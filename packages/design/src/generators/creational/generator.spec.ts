import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { getComponentPaths } from '@nxgs/devkit';
import { Tree } from '@nx/devkit';

import { creationalGenerator } from './generator';
import { CreationalOptions } from './schema';

describe('creational generator', () => {
  let tree: Tree;
  const options: CreationalOptions = { name: 'test', pattern: 'singleton' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate a singleton pattern', async () => {
    await creationalGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should generate a facade pattern', async () => {
    options.pattern = 'facade';
    await creationalGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
