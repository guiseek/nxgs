import { Package } from 'dgeni';
import nxgsContentPackage from '../nxgs-content-package';
import nxgsBasePackage from '../nxgs-base-package';
import { cleanGeneratedFiles } from './processors';

export default new Package('nxgs', [
  nxgsContentPackage,
  nxgsBasePackage,
]).processor(cleanGeneratedFiles);
