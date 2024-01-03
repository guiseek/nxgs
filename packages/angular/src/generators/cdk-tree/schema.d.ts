export type CdkTreeTechnique = 'flat' | 'nested';

export interface CdkTreeOptions {
  name: string;
  technique: CdkTreeTechnique;
  directory?: string;
  prefix?: string;
  project?: string;
}

export interface NormalizedCdkTreeOptions extends CdkTreeOptions {
  directory: string;
  prefix: string;
  className: string;
  fileName: string;
}
