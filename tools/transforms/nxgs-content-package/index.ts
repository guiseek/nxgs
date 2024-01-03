import { Package } from 'dgeni';

import { CONTENTS_PATH } from '../config';
import nxgsBasePackage from '../nxgs-base-package';
import contentPackage, { contentFileReader } from '../content-package';
import { Document } from '../shared';

export default new Package('nxgs-content', [nxgsBasePackage, contentPackage])
  .config((readFilesProcessor: any) => {
    readFilesProcessor.sourceFiles = readFilesProcessor.sourceFiles.concat([
      {
        basePath: CONTENTS_PATH,
        include: CONTENTS_PATH + '/**/*.md',
        fileReader: contentFileReader.name,
      },
      {
        basePath: CONTENTS_PATH,
        include: CONTENTS_PATH + '/navigation.json',
        fileReader: 'jsonFileReader',
      },
      {
        basePath: CONTENTS_PATH,
        include: CONTENTS_PATH + '/discover/who-uses.json',
        fileReader: 'jsonFileReader',
      },
    ]);
  })

  .config((computePathsProcessor: any) => {
    // Replace any path templates inherited from other packages
    // (we want full and transparent control)
    computePathsProcessor.pathTemplates =
      computePathsProcessor.pathTemplates.concat([
        {
          docTypes: ['content', 'who-uses'],
          getPath: (doc: Document) => `${doc.id.replace(/\/index$/, '')}`,
          outputPathTemplate: '${path}.json',
        },
        {
          docTypes: ['who-uses-json'],
          pathTemplate: '${id}',
          outputPathTemplate: '../${id}.json',
        },
      ]);
  });
