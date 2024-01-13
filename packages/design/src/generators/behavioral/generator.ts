import { PatternOptions, BehavioralPattern } from '../../interfaces';
import { Tree, formatFiles, generateFiles } from '@nx/devkit';
import { I18nMap, normalizeOptions } from '../../utilities';
import { join } from 'path';

import { loadI18n, readPluginOptions } from '../../utilities';

export async function behavioralGenerator(
  tree: Tree,
  options: PatternOptions<BehavioralPattern>
) {
  const { lang } = readPluginOptions(tree);

  const { directory, ...normalized } = normalizeOptions(tree, options);

  const file = `behavioral.${options.pattern}` as keyof I18nMap;
  const { default: i18n } = await loadI18n(file, lang);
  const single = normalized.singleFile ? 'single' : 'multiple';

  const srcFolder = join(__dirname, 'files', normalized.pattern, single);

  generateFiles(tree, srcFolder, directory, { ...normalized, ...i18n });

  await formatFiles(tree);
}

export default behavioralGenerator;
