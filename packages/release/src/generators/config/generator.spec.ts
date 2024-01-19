import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, addProjectConfiguration } from '@nx/devkit';

import { configGenerator } from './generator';
import { ConfigOptions } from './schema';
describe('config generator', () => {
  let tree: Tree;
  const options: ConfigOptions = {
    projectName: 'test',
    repositoryUrl: '',
    tagFormat: '',
    github: true,
    npm: true,
  };

  const projectRoot = `packages/${options.projectName}`;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();

    addProjectConfiguration(tree, options.projectName, {
      root: projectRoot,
      projectType: 'library',
      sourceRoot: `${projectRoot}/src`,
      targets: {},
    });
  });

  it('should run successfully', async () => {
    await configGenerator(tree, options);
    expect(options.projectName).toBe('test');
  });
});
