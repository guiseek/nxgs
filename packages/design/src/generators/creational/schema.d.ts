type Pattern = 'singleton';

export interface CreationalOptions {
  name: string;
  pattern: Pattern;
  directory?: string;
  project?: string;
}

export interface NormalizedCreationalOptions extends CreationalOptions {
  directory: string;
}
