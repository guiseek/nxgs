import { names } from '@nx/devkit';
import { join } from 'path';

export function getComponentPaths<
  T extends { name: string; directory?: string; type?: string }
>(options: T) {
  const { fileName: directory } = names(options.directory ?? options.name);
  const { fileName } = names(options.name);

  const path = join(directory, fileName);

  options.type ??= 'component';

  return {
    component: path + `.${options.type}.ts`,
    template: path + `.${options.type}.html`,
    styles: path + `.${options.type}.scss`,
  };
}
