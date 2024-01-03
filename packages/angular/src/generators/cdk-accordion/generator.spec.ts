import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, names } from '@nx/devkit';

import { cdkAccordionGenerator } from './generator';
import { CdkAccordionOptions } from './schema';
import { join } from 'path';

function getPaths(options: CdkAccordionOptions) {
  const { fileName: directory } = names(options.directory ?? options.name);
  const { fileName } = names(options.name);

  const path = join(directory, fileName);

  return {
    component: path + '.component.ts',
    template: path + '.component.html',
    styles: path + '.component.scss',
  };
}

describe('cdk-accordion generator', () => {
  let tree: Tree;
  const options: CdkAccordionOptions = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await cdkAccordionGenerator(tree, options);

    const path = getPaths(options);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });

  it('should run successfully', async () => {
    const directory = 'dir';
    const opts = { ...options, directory };
    const path = getPaths(opts);
    await cdkAccordionGenerator(tree, opts);

    expect(tree.exists(path.component)).toBeDefined();
    expect(tree.exists(path.template)).toBeDefined();
    expect(tree.exists(path.styles)).toBeDefined();
  });
});
