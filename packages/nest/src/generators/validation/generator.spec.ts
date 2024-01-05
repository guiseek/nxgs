import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import type { PackageJson } from 'nx/src/utils/package-json';
import { Tree, readJson } from '@nx/devkit';

import { validationGenerator } from './generator';
import type { ValidationOptions } from './schema';
import { join } from 'path';

describe('validation generator', () => {
  let tree: Tree;

  const dependencies = {
    'class-transformer': 'latest',
    'class-validator': 'latest',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should add dependencies to package.json', async () => {
    const options: ValidationOptions = { directory: 'config', auto: false };

    await validationGenerator(tree, options);

    const packageJson = readJson<PackageJson>(tree, 'package.json');

    expect(packageJson.dependencies).toStrictEqual(dependencies);
  });

  it('should generated setup auto validation file', async () => {
    const options: ValidationOptions = { directory: 'config', auto: true };

    await validationGenerator(tree, options);

    const path = join(options.directory, 'setup-auto-validation.ts');

    expect(tree.exists(path)).toBeTruthy();
  });
});
