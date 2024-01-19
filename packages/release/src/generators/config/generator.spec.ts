import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, addProjectConfiguration } from '@nx/devkit';

import { configGenerator } from './generator';
import { ConfigOptions } from './schema';
import { join } from 'path';

const root = join(__dirname, '..', '..', '..');

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

    tree.write(
      join(root, 'package.json'),
      `{
  "name": "@nxgs/release",
  "version": "0.0.1",
}`
    );

    tree.write(
      join(root, 'executors.json'),
      `{
  "executors": {
    "release": {
      "implementation": "./src/executors/release/executor",
      "schema": "./src/executors/release/schema.json",
      "description": "release executor"
    }
  }
}`
    );
  });

  it('should run successfully', async () => {
    await configGenerator(tree, options);
    expect(options.projectName).toBe('test');
  });
});
