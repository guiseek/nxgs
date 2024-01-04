export interface CdkOptions<T extends string> {
  name: string;
  example: T;
  directory?: string;
  prefix?: string;
  project?: string;
}

export interface NormalizedCdkOptions<T extends string> extends CdkOptions<T> {
  directory: string;
  prefix: string;
  className: string;
  fileName: string;
}
