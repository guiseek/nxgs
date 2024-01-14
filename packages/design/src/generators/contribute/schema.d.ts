import { PatternType } from '../../interfaces';

export interface ContributeOptions {
  name: string;
  type: PatternType;
}

export interface NormalizedContributeOptions extends ContributeOptions {
  typeClassName: string;
  propertyName: string;
  className: string;
  fileName: string;
}
