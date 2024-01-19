import type { PluginSpec } from 'semantic-release';
import type { ExecutorContext } from '@nx/devkit';
import type { ReleaseOptions } from '../types';
import { getDefaultProjectRoot } from './get-project';
import { join, posix, relative, sep } from 'node:path';
import { existsSync } from 'node:fs';

export const resolvePlugins = (
  options: ReleaseOptions,
  context: ExecutorContext
) => {
  const packageJsonDir =
    options.packageJsonDir ?? getDefaultProjectRoot(context);
  const relativeProjectPkgPath = relative(context.cwd, packageJsonDir);

  const emptyArray = [];
  const defaultPlugins: PluginSpec[] = [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: options.parserOpts,
        releaseRules: options.releaseRules,
        preset: options.preset,
        presetConfig: options.presetConfig,
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        linkCompare: options.linkCompare,
        linkReferences: options.linkReferences,
        parserOpts: options.parserOpts,
        writerOpts: options.writerOpts,
        preset: options.preset,
        presetConfig: options.presetConfig,
      },
    ],

    ...(options.changelog
      ? [
          [
            '@semantic-release/changelog',
            {
              changelogFile: options.changelogFile,
            },
          ],
        ]
      : emptyArray),
    ...(options.npm ? getNpmPlugin(context, options) : emptyArray),
    ...(options.plugins ?? []),
  ];

  if (options.git) {
    defaultPlugins.push([
      '@semantic-release/git',
      {
        message: options.commitMessage,
        assets: [
          // Git requires relative paths from project root in a posix format

          relative(context.cwd, options.changelogFile)
            .split(sep)
            .join(posix.sep),

          join(relativeProjectPkgPath, 'package.json')
            .split(sep)
            .join(posix.sep),
          ...(options.gitAssets ?? []),
        ],
      },
    ]);
  }

  if (options.github) {
    defaultPlugins.push(['@semantic-release/github', options.githubOptions]);
  }

  return defaultPlugins;
};

const getNpmPlugin = (
  context: ExecutorContext,
  options: ReleaseOptions
): PluginSpec[] => {
  const packageJsonDir =
    options.packageJsonDir ?? getDefaultProjectRoot(context);
  const projectPkgPath = join(packageJsonDir, 'package.json');

  const buildPkgRoot = options.outputPath
    ? join(options.outputPath, 'package.json')
    : undefined;

  const plugins: PluginSpec[] = [];

  if (buildPkgRoot && existsSync(buildPkgRoot)) {
    // Bump package.json version for built project,
    // so that it can be published to NPM with
    // correct version (if package is public)
    plugins.push([
      '@semantic-release/npm',
      {
        pkgRoot: options.outputPath,
      },
    ]);
  }

  if (existsSync(projectPkgPath)) {
    // Bump package.json in project itself
    plugins.push([
      '@semantic-release/npm',
      {
        pkgRoot: packageJsonDir,
        npmPublish: false,
      },
    ]);
  }

  return plugins;
};
