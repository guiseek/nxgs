export type PatternType = 'behavioral' | 'creational' | 'structural';

export type CreationalPattern = 'singleton';
export type StructuralPattern = 'facade';
export type BehavioralPattern =
  | 'command'
  | 'observer'
  | 'iterator'
  | 'chain-of-responsability';

export type Pattern = CreationalPattern | StructuralPattern | BehavioralPattern;

export interface PatternOptions<T extends Pattern> {
  name: string;
  pattern: T;
  singleFile: boolean;
  directory?: string;
  project?: string;
}

export interface NormalizedPatternOptions<T extends Pattern>
  extends PatternOptions<T> {
  directory: string;
}
