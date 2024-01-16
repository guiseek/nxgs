import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { libraryGenerator } from './generator';
import { LibraryOptions } from './schema';

describe('library generator', () => {
  let tree: Tree;
  let options: LibraryOptions;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
    options = { type: 'utility', name: 'test' };
    tree.write(
      '.gitignore',
      `dist
    tmp
    /out-tsc
    
    # dependencies
    node_modules
    `
    );
  });

  it('should generate feature react library', async () => {
    options = {
      name: 'test',
      type: 'feature',
      framework: 'react',
      buildable: true,
    };

    await libraryGenerator(tree, options);

    const config = readProjectConfiguration(tree, 'test');

    expect(config.targets.build.executor).toBe('@nx/rollup:rollup');
  });

  it('should generate feature angular library', async () => {
    options = {
      name: 'test',
      type: 'feature',
      framework: 'angular',
      buildable: true,
    };

    await libraryGenerator(tree, options);

    const config = readProjectConfiguration(tree, 'test');

    expect(config.targets.build.executor).toBe('@nx/angular:ng-packagr-lite');
  });

  it('should generate data-access library', async () => {
    options = {
      type: 'data-access',
      buildable: true,
      name: 'test',
    };

    await libraryGenerator(tree, options);

    const config = readProjectConfiguration(tree, 'test');

    expect(config.targets.build.executor).toBe('@nx/js:tsc');
  });

  it('should generate utility library', async () => {
    options = {
      type: 'utility',
      buildable: true,
      name: 'test',
    };

    await libraryGenerator(tree, options);

    const config = readProjectConfiguration(tree, 'test');

    expect(config.targets.build.executor).toBe('@nx/js:tsc');
  });

  it('should generate tags with type utility', async () => {
    await libraryGenerator(tree, options);

    const config = readProjectConfiguration(tree, 'test');

    expect(config.tags).toEqual(['type:utility']);
  });

  it('should generate tags as type:utility', async () => {
    await libraryGenerator(tree, options);

    const config = readProjectConfiguration(tree, 'test');

    expect(config.tags).toEqual(['type:utility']);
  });

  it('should generate tags with type:utility and scope:shared', async () => {
    options = { ...options, tags: 'scope:shared' };
    await libraryGenerator(tree, options);

    const config = readProjectConfiguration(tree, 'test');

    expect(config.tags).toEqual(['scope:shared', 'type:utility']);
  });
});
