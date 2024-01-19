import type { ReleaseOptions } from '../../lib/types';

export interface ConfigOptions
  extends Pick<
    ReleaseOptions,
    'github' | 'repositoryUrl' | 'changelog' | 'npm' | 'tagFormat'
  > {
  projectName: string;
}
