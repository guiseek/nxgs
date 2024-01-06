import { PatternOptions, BehavioralPattern } from '../../interfaces';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { behavioralGenerator } from './generator';
import { getComponentPaths } from '@nxgs/devkit';
import { Tree } from '@nx/devkit';

describe('behavioral generator', () => {
  let tree: Tree;
  const options: PatternOptions<BehavioralPattern> = {
    name: 'test',
    pattern: 'command',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate a command pattern', async () => {
    await behavioralGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
