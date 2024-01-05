import { Bundler } from '@nx/js/src/utils/schema';

export type LibraryType = 'feature' | 'ui' | 'data-access' | 'utility';

export type Framework = 'angular' | 'react' | 'none';

export interface LibraryOptions {
  name: string;
  type: LibraryType;
  framework?: Framework;
  directory?: string;
  projectNameAndRootFormat?: ProjectNameAndRootFormat;
  tags?: string;
  importPath?: string;
  prefix?: string;
  publishable?: boolean;
  buildable?: boolean;
}

export interface NormalizedOptions extends Required<LibraryOptions> {
  bundler: Bundler;
}
