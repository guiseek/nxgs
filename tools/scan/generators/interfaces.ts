export interface SchemaJson {
  $schema: string;
  $id: string;
  title: string;
  type: string;
  properties: Properties;
  required: string[];
}

export interface Properties {
  directory: Directory;
  title: Description;
  description: Description;
  prefix: Description;
  project: Project;
}

export interface Description {
  type: string;
  description: string;
  'x-prompt': string;
  default?: string;
}

export interface Directory {
  type: string;
  description: string;
  $default: DirectoryDefault;
  aliases: string[];
}

export interface DirectoryDefault {
  $source: string;
  index: number;
}

export interface Project {
  type: string;
  description: string;
  $default: ProjectDefault;
  'x-dropdown': string;
}

export interface ProjectDefault {
  $source: string;
}
