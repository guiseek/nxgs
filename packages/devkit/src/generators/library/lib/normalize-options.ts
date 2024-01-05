import { ProjectNameAndRootFormat } from '@nx/devkit/src/generators/project-name-and-root-utils';
import { LibraryType, LibraryOptions, NormalizedOptions } from '../schema';
import { names, workspaceRoot } from '@nx/devkit';

const workspaceName = (() => {
  return workspaceRoot.split('/').pop();
})();

export function normalizeTagsByLibraryType(type: LibraryType, tags?: string) {
  const originalTags = `${tags ?? ''}`;
  const hasTags = originalTags !== '';

  const tagTyped = `type:${type}`;
  const normalizedTags = originalTags.concat(
    hasTags ? `,${tagTyped}` : tagTyped
  );

  return Array.from(new Set(normalizedTags.split(',')).values()).toString();
}

export function normalizeOptions(options: LibraryOptions): NormalizedOptions {
  const directory = options.directory
    ? names(options.directory).fileName
    : names(options.name).fileName;

  const tags = normalizeTagsByLibraryType(options.type, options.tags);

  const projectNameAndRootFormat: ProjectNameAndRootFormat =
    options.projectNameAndRootFormat ? 'derived' : 'as-provided';

  const framework = options.framework ?? 'none';
  const bundler = framework === 'none' ? 'tsc' : 'vite';

  const buildable = options.buildable ?? false;
  const publishable = options.publishable ?? false;

  const importPath = options.importPath ?? `@${workspaceName}/${directory}`;
  const prefix = options.prefix ?? workspaceName;

  const normalized: NormalizedOptions = {
    ...options,
    projectNameAndRootFormat,
    publishable,
    importPath,
    framework,
    directory,
    buildable,
    bundler,
    prefix,
    tags,
  };

  return normalized;
}
