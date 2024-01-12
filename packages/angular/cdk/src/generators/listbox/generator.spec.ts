import { cdkListboxGenerator, CdkListboxExample } from './generator';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Options, getComponentPaths } from '../../../../src';
import { Tree } from '@nx/devkit';

describe('listbox generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate basic example', async () => {
    const options: Options<CdkListboxExample> = {
      name: 'test',
      example: 'basic',
    };

    await cdkListboxGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(path.component).toBeDefined();
  });

  it('should generate active-descendant example', async () => {
    const options: Options<CdkListboxExample> = {
      name: 'test',
      example: 'active-descendant',
    };

    await cdkListboxGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(path.component).toBeDefined();
  });

  it('should generate complex-object-values example', async () => {
    const options: Options<CdkListboxExample> = {
      name: 'test',
      example: 'complex-object-values',
    };

    await cdkListboxGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(path.component).toBeDefined();
  });

  it('should generate custom-typeahead example', async () => {
    const options: Options<CdkListboxExample> = {
      name: 'test',
      example: 'custom-typeahead',
    };

    await cdkListboxGenerator(tree, options);

    const path = getComponentPaths(options);

    expect(path.component).toBeDefined();
  });
});
