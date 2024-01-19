import type { Commit, Context } from 'semantic-release';
import type { ProjectGraph } from '@nx/devkit';

export interface CommitAffectedProjects {
  commit: Pick<Commit, 'subject' | 'commit' | 'body'>;
  projects: string[];
  // Name of root project
  projectName: string;
  context: Pick<Context, 'logger'>;
  verbose?: boolean;
  graph: ProjectGraph;
}
