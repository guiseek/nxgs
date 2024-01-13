export interface Options {
  directory: string;
  project?: string;
}

export interface NormalizedOptions extends Options {
  directory: string;
}
