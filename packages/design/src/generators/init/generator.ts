import { formatFiles, readNxJson, Tree, updateNxJson } from '@nx/devkit';

import { InitOptions } from '../../interfaces';
import { languages } from '../../utilities';

function normalizeOptions(options: InitOptions): InitOptions {
  const defaultOptions: InitOptions = { lang: 'en-us' };
  const hasLang = languages.includes(options.lang);

  return hasLang ? options : defaultOptions;
}

export async function initGenerator(tree: Tree, options: InitOptions) {
  const normalizedOptions = normalizeOptions(options);

  const nxJson = readNxJson(tree);
  nxJson.generators = nxJson.generators ?? {};
  nxJson.generators['@nxgs/design'] = normalizedOptions;

  updateNxJson(tree, nxJson);

  await formatFiles(tree);
}

export default initGenerator;
