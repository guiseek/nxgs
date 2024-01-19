import type { ReleaseOptions } from '../../lib/types';

export interface InitReleaseOptions
  extends Pick<ReleaseOptions, 'github' | 'repositoryUrl' | 'changelog'> {
  baseBranch?: string;
  enforceConventionalCommits?: boolean;
}
