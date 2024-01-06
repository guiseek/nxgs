export type CreationalPattern = 'singleton';
export type StructurallPattern = 'facade';
export type BehavioralPattern = 'command';

export type Pattern =
  | CreationalPattern
  | StructurallPattern
  | BehavioralPattern;

export interface PatternOptions<T extends Pattern> {
  name: string;
  pattern: T;
  directory?: string;
  project?: string;
}

export interface NormalizedPatternOptions<T extends Pattern>
  extends PatternOptions<T> {
  directory: string;
}