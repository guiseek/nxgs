import { PatternOptions, StructuralPattern } from '../../interfaces';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { structuralGenerator } from './generator';
import { Tree } from '@nx/devkit';
import { join } from 'path';

describe('structural generator', () => {
  let tree: Tree;
  const options: PatternOptions<StructuralPattern> = {
    name: 'test',
    pattern: 'facade',
    singleFile: false,
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate a facade pattern', async () => {
    await structuralGenerator(tree, options);

    const file = join(options.name, `${options.name}.facade.ts`);

    expect(tree.exists(file)).toBeTruthy();
  });
});
