import { normalize } from '../../lib/utilities';
import { SwaggerOptions } from './schema';
import {
  Tree,
  formatFiles,
  generateFiles,
  installPackagesTask,
  addDependenciesToPackageJson,
} from '@nx/devkit';
import { join } from 'path';

export async function swaggerGenerator(tree: Tree, options: SwaggerOptions) {
  if (!options.directory) throw new Error('Missing directory');

  const dependencies = {
    '@nestjs/swagger': 'latest',
  };

  addDependenciesToPackageJson(tree, dependencies, {});

  const normalizeOptions = normalize({ defaultDirectory: 'config' });

  const { directory, ...normalized } = normalizeOptions(tree, options);

  const description = options.description ?? '';
  const prefix = options.prefix ?? 'api';

  generateFiles(tree, join(__dirname, 'files'), directory, {
    ...normalized,
    description,
    prefix,
  });

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}

export default swaggerGenerator;
