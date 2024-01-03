export interface CdkAccordionOptions {
  name: string;
  directory?: string;
  prefix?: string;
  project?: string;
}

export interface NormalizedCdkAccordionOptions extends CdkAccordionOptions {
  directory: string;
  prefix: string;
  className: string;
  fileName: string;
}
