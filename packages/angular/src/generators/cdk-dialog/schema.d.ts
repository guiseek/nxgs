export type CdkDialogExample = 'data' | 'overview' | 'styling';

export interface CdkDialogOptions {
  name: string;
  example: CdkDialogExample;
  directory?: string;
  prefix?: string;
  project?: string;
}

export interface NormalizedCdkDialogOptions extends CdkDialogOptions {
  directory: string;
  prefix: string;
  className: string;
  fileName: string;
}
