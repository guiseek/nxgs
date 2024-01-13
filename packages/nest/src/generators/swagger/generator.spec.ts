import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readJson } from '@nx/devkit';

import { swaggerGenerator } from './generator';
import { SwaggerOptions } from './schema';
import { PackageJson } from 'nx/src/utils/package-json';
import { join } from 'path';

describe('swagger generator', () => {
  let tree: Tree;

  const dependencies = {
    '@nestjs/swagger': 'latest',
  };

  const options: SwaggerOptions = { title: 'test', directory: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await swaggerGenerator(tree, options);

    const packageJson = readJson<PackageJson>(tree, 'package.json');

    const file = join(options.directory, 'swagger.ts');

    expect(packageJson.dependencies).toStrictEqual(dependencies);
    expect(tree.exists(file)).toBeTruthy();
  });
});
