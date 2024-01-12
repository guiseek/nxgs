import { names } from '@nx/devkit';
import { join } from 'path';

export function getComponentPaths<
  T extends { name: string; directory?: string }
>(options: T) {
  const { fileName: directory } = names(options.directory ?? options.name);
  const { fileName } = names(options.name);

  const path = join(directory, fileName);

  return {
    component: path + '.component.ts',
    template: path + '.component.html',
    styles: path + '.component.scss',
  };
}
