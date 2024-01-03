import { Package } from 'dgeni';
import { Document } from '../shared';
import {
  computeOutputPathProcessor,
  computeWhoUsesProcessor,
  extractContentTitleProcessor,
} from './processors';
import { ContentFileReader, contentFileReader } from './readers';
import { nxgsMarkedNunjucksFilter } from './rendering/filters/nxgs-marked';
import { nxgsMarkedNunjucksTag } from './rendering/tags/nxgs-marked';
import { renderNxGSMarkdown } from './services';

export default new Package('content', [])
  .factory(contentFileReader)
  .factory(renderNxGSMarkdown)
  .factory(nxgsMarkedNunjucksTag)
  .factory(nxgsMarkedNunjucksFilter)

  .processor(extractContentTitleProcessor)
  .processor(computeOutputPathProcessor)
  .processor(computeWhoUsesProcessor)

  .config(
    (
      readFilesProcessor: Record<string, unknown[]>,
      contentFileReader: ContentFileReader
    ) => {
      readFilesProcessor.fileReaders.push(contentFileReader);
    }
  )

  .config(
    (
      templateEngine: Record<string, unknown[]>,
      nxgsMarkedNunjucksTag: Record<string, unknown[]>,
      nxgsMarkedNunjucksFilter: Record<string, unknown[]>
    ) => {
      templateEngine.tags.push(nxgsMarkedNunjucksTag);
      templateEngine.filters.push(nxgsMarkedNunjucksFilter);
    }
  )

  .config((computeIdsProcessor: Record<string, unknown[]>) => {
    computeIdsProcessor.idTemplates.push({
      docTypes: ['content', 'who-uses'],
      getId: (doc: Document) => {
        return (
          doc.fileInfo.relativePath
            // path should be relative to `modules` folder
            .replace(/.*\/?modules\//, '')
            // path should not include `/docs/`
            .replace(/\/docs\//, '/')
            // path should not have a suffix
            .replace(/\.\w*$/, '')
        );
      },
      getAliases: (doc: Document) => [doc.id],
    });
  });

export * from './processors';
export * from './readers';
