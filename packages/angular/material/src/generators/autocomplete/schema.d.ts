export type MatAutocompleteExample = 'filter';

export interface MatAutocompleteOptions {
  name: string;
  example: MatAutocompleteExample;
  directory?: string;
  prefix?: string;
  project?: string;
}

export interface NormalizedMatAutocompleteOptions
  extends MatAutocompleteOptions {
  directory: string;
  prefix: string;
  className: string;
  fileName: string;
}
