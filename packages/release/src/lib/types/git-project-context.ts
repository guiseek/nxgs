import type { ExecutorContext } from '@nx/devkit';

export type GetProjectContext = Pick<
  ExecutorContext,
  | 'projectName'
  | 'cwd'
  | 'projectsConfigurations'
  | 'projectGraph'
  | 'workspace'
>;
