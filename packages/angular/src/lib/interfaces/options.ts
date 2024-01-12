export interface Options<T extends string | void = string> {
  name: string;
  example?: T;
  directory?: string;
  prefix?: string;
  project?: string;
}

export interface NormalizedOptions<T extends string | void = string>
  extends Options<T> {
  directory: string;
  prefix: string;
  className: string;
  fileName: string;
}
