import { PatternOptions, StructurallPattern } from '../../interfaces';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { structuralGenerator } from './generator';
import { getComponentPaths } from '@nxgs/devkit';
import { Tree } from '@nx/devkit';

describe('structural generator', () => {
  let tree: Tree;
  const options: PatternOptions<StructurallPattern> = {
    name: 'test',
    pattern: 'facade',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate a facade pattern', async () => {
    await structuralGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
