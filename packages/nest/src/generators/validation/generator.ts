import {
  Tree,
  formatFiles,
  generateFiles,
  installPackagesTask,
  addDependenciesToPackageJson,
} from '@nx/devkit';
import { ValidationOptions } from './schema';
import { normalizeOptions } from './lib/normalize-options';
import { join } from 'node:path';

export async function validationGenerator(
  tree: Tree,
  options: ValidationOptions
) {
  if (options.auto && !options.directory) {
    throw new Error(
      `Missing directory: when auto-validation option is set true, we need directory where setup are placed`
    );
  }

  const dependencies = {
    'class-validator': 'latest',
    'class-transformer': 'latest',
  };

  addDependenciesToPackageJson(tree, dependencies, {});

  const normalizedOptions = normalizeOptions(tree, options);

  if (normalizedOptions.auto) {
    const srcFolder = join(__dirname, 'files');
    generateFiles(
      tree,
      srcFolder,
      normalizedOptions.directory,
      normalizedOptions
    );
  }

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}

export default validationGenerator;
