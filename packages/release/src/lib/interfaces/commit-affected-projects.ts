import type { Commit, BaseContext } from 'semantic-release';
import type { ProjectGraph } from '@nx/devkit';

export interface CommitAffectedProjects {
  commit: Pick<Commit, 'subject' | 'commit' | 'body'>;
  projects: string[];
  // Name of root project
  projectName: string;
  context: Pick<BaseContext, 'logger'>;
  verbose?: boolean;
  graph: ProjectGraph;
}
