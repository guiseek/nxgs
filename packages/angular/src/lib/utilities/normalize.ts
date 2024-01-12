import { readAngularProjectConfiguration } from './read-angular-project-configuration';
import { Options, NormalizedOptions } from '../interfaces';
import { Tree, names } from '@nx/devkit';
import { join } from 'path';

interface NormalizeConfig<T extends string = string> {
  prefix: string;
  exampleDefault?: T;
}

export function normalize<T extends string>(
  { prefix, exampleDefault }: NormalizeConfig<T> = { prefix: 'cdk' }
) {
  return (
    tree: Tree,
    { project, ...options }: Options<T>
  ): NormalizedOptions<T> => {
    const { fileName: directory } = names(options.directory ?? options.name);

    const normalizedOptions = {
      ...options,
      ...names(options.name),
      directory,
      prefix,
    };

    options.example = exampleDefault;

    if (options.example) {
      normalizedOptions.example = options.example;
    }

    if (project) {
      const config = readAngularProjectConfiguration(tree, project);

      if (config.prefix) {
        normalizedOptions.prefix = config.prefix;
      }

      if (config.sourceRoot) {
        normalizedOptions.directory = join(config.sourceRoot, directory);
      }
    }

    return normalizedOptions;
  };
}
