import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { getComponentPaths } from '@nxgs/devkit';
import { Tree } from '@nx/devkit';

import { creationalGenerator } from './generator';
import { CreationalPattern, PatternOptions } from '../../interfaces';

describe('creational generator', () => {
  let tree: Tree;
  const options: PatternOptions<CreationalPattern> = {
    name: 'test',
    pattern: 'singleton',
    singleFile: false,
  };

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
});
