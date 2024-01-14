import { ContributeOptions, NormalizedContributeOptions } from './schema';
import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';
import { loadI18n, readPluginOptions } from '../../utilities';
import { join } from 'path';

function normalizeOptions(
  options: ContributeOptions
): NormalizedContributeOptions {
  const { className: typeClassName } = names(options.type);
  return { ...options, ...names(options.name), typeClassName };
}

function path(...crumbs: string[]) {
  return join(__dirname, ...crumbs);
}

function movePattern(tree: Tree, normalized: NormalizedContributeOptions) {
  const source = path('files', normalized.type);
  const directory = path('..', normalized.type, 'files');
  generateFiles(tree, source, directory, normalized);
}

function moveConstants(tree: Tree, normalized: NormalizedContributeOptions) {
  const source = path('files', 'constants');
  const directory = path('..', '..', 'constants');
  generateFiles(tree, source, directory, normalized);
}

const normalizeInstructions = async (tree: Tree) => {
  const { lang } = readPluginOptions(tree);
  const { default: values } = await loadI18n('contribute.instructions', lang);
  const instructions = Object.values(values) as string[];

  for (const [heading, ...items] of instructions) {
    console.log('\n\t', heading, '\n');
    items.map((item, i) => console.log('\t\t', i, item));
    console.log('\n');
  }
};

export async function contributeGenerator(
  tree: Tree,
  options: ContributeOptions
) {
  const normalized = normalizeOptions(options);

  movePattern(tree, normalized);
  moveConstants(tree, normalized);

  await formatFiles(tree);

  await normalizeInstructions(tree);
}

export default contributeGenerator;
