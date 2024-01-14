import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { contributeGenerator } from './generator';
import { ContributeOptions } from './schema';
import { join } from 'path';

function path(...crumbs: string[]) {
  return join(__dirname, '..', '..', ...crumbs);
}

describe('contribute generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    const options: ContributeOptions = { name: 'test', type: 'behavioral' };

    await contributeGenerator(tree, options);

    const i18nInterface = path(
      'constants',
      'i18n',
      'interfaces',
      `${options.type}-${options.name}.ts`
    );

    console.log(i18nInterface);

    expect(tree.exists(i18nInterface)).toBeTruthy();
  });
});
