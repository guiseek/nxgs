import { resolvePlugins, getSemanticRelease } from '../../lib/utilities';
import {
  runExecutor,
  type ExecutorContext,
  createProjectGraphAsync,
} from '@nx/devkit';
import {
  setExecutorContext,
  unwrapExecutorOptions,
  type ExecutorOptions,
} from '@nxgs/devkit';
import type { ReleaseOptions } from '../../lib/types';
import { defaultOptions } from '../../lib/default-options';
import { cosmiconfigSync } from 'cosmiconfig';
import {
  parseTag,
  resolveOptions,
  inferOutputPath,
  extractBuildTargetParams,
} from './release';

export default async function runReleaseExecutor(
  projectOptions: ExecutorOptions<ReleaseOptions>,
  context: ExecutorContext
) {
  const cosmicOptions: ReleaseOptions =
    cosmiconfigSync('nxrelease').search(context.cwd)?.config ?? {};

  const resolvedOptions = resolveOptions(
    defaultOptions,
    cosmicOptions,
    unwrapExecutorOptions(projectOptions),
    context
  );

  if (resolvedOptions.buildTarget) {
    const params = extractBuildTargetParams(
      resolvedOptions.buildTarget,
      context,
      context.projectGraph ?? (await createProjectGraphAsync())
    );

    const result = await runExecutor(params, {}, context);

    for await (const output of result) {
      if (!output.success) {
        throw new Error(
          `Failed to run build target ${params.project}:${params.target}`
        );
      }
    }

    if (!resolvedOptions.outputPath) {
      inferOutputPath(params.project, params.target, resolvedOptions);
    }
  }

  setExecutorContext(context);

  const plugins = resolvePlugins(resolvedOptions, context);

  const tagFormat = resolvedOptions.tagFormat
    ? parseTag(resolvedOptions.tagFormat)
    : resolvedOptions.tagFormat;

  const release = await getSemanticRelease();

  await release({
    extends: '@nxgs/release',
    ...resolvedOptions,
    tagFormat,
    plugins,
  });

  return {
    success: true,
  };
}
