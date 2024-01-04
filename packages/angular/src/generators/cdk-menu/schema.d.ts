type CdkMenuExample =
  | 'inline-menu'
  | 'menu-bar'
  | 'context-menu'
  | 'nested-context-menus'
  | 'menu-standalone-trigger'
  | 'stateful-menu-standalone-trigger';

export interface CdkMenuOptions {
  name: string;
  example: CdkMenuExample;
  directory?: string;
  prefix?: string;
  project?: string;
}

export interface NormalizedCdkMenuOptions extends CdkMenuOptions {
  directory: string;
  prefix: string;
  className: string;
  fileName: string;
}
