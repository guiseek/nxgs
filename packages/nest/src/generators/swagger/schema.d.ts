import { Options } from '../../lib/interfaces/options';

export interface SwaggerOptions extends Options {
  title: string;
  description?: string;
  prefix?: string;
}
