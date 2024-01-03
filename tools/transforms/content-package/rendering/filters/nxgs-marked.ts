import { RenderNxGSMarkdown } from '../../services';

export function nxgsMarkedNunjucksFilter(
  renderNxGSMarkdown: RenderNxGSMarkdown
) {
  return {
    name: 'nxgsmarked',
    process(str: string) {
      const output = str && renderNxGSMarkdown(str);
      return output;
    },
  };
}
