import { Tree, readNxJson } from '@nx/devkit';
import { InitOptions } from '../interfaces';
import { languages } from './languages';

export function readPluginOptions(tree: Tree) {
  const { generators = {} } = readNxJson(tree) ?? {};

  let options: InitOptions = { lang: 'en-us' };

  if ('@nxgs/design' in generators) {
    const initOptions = generators['@nxgs/design'] as InitOptions;

    if (languages.includes(initOptions.lang)) options = initOptions;
  }

  return options;
}
