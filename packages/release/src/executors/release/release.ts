import { readCachedProjectConfiguration } from 'nx/src/project-graph/project-graph';
import { replaceOptions, getDefaultProjectRoot } from '../../lib/utilities';
import type { GetProjectContext, ReleaseOptions } from '../../lib/types';
import { join, relative } from 'node:path';
import {
  logger,
  workspaceRoot,
  parseTargetString,
  type ProjectGraph,
  type ExecutorContext,
} from '@nx/devkit';

export function inferOutputPath(
  projectName: string,
  target: string,
  options: ReleaseOptions
) {
  const projectConfig = readCachedProjectConfiguration(projectName);

  const projectOutputPath =
    projectConfig.targets?.[target]?.options?.outputPath ?? '';

  if (projectOutputPath) {
    const resolvedOutputPath = join(workspaceRoot, projectOutputPath);

    logger.info(
      `Resolved ${resolvedOutputPath} as output path for semantic-release`
    );

    options.outputPath = resolvedOutputPath;
  }
}

export function extractBuildTargetParams(
  buildTarget: string,
  context: ExecutorContext,
  graph: ProjectGraph
) {
  if (buildTarget.includes(':')) {
    return parseTargetString(buildTarget, graph);
  }

  return {
    project: context.projectName as string,
    target: buildTarget,
  };
}

export function resolveOptions(
  defaultOptions: ReleaseOptions,
  cosmicOptions: ReleaseOptions,
  projectOptions: ReleaseOptions,
  context: GetProjectContext
) {
  const mergedOptions = {
    ...defaultOptions,
    ...cosmicOptions,
    ...projectOptions,
  };

  return replaceOptions(mergedOptions, {
    projectName: context.projectName as string,
    relativeProjectDir: relative(context.cwd, getDefaultProjectRoot(context)),
    projectDir: getDefaultProjectRoot(context),
    workspaceDir: workspaceRoot,
  });
}

// Replace our token that is used for consistency
// with token required by semantic-release
export function parseTag(tag: string) {
  return tag.replace('${VERSION}', (match) => match.toLowerCase());
}
