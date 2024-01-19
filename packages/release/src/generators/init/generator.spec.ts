import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import { initGenerator } from './generator';
import { InitReleaseOptions } from './schema';

describe('init generator', () => {
  let tree: Tree;
  const options: InitReleaseOptions = {
    repositoryUrl: '',
    baseBranch: '',
    github: true,
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await initGenerator(tree, options);
    expect(options.github).toBeTruthy();
  });
});
