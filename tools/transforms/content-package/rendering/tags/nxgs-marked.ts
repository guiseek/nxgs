import { RenderNxGSMarkdown } from '../../services';

export function nxgsMarkedNunjucksTag(renderNxGSMarkdown: RenderNxGSMarkdown) {
  return {
    tags: ['nxgsmarked'],

    /** Disable autoescape for this tag because the markdown tag renders HTML that shouldn't be escaped. */
    autoescape: false,

    parse: function (parser: any, nodes: any) {
      parser.advanceAfterBlockEnd();

      var content = parser.parseUntilBlocks('endmarked');
      var tag = new nodes.CallExtension(this, 'process', null, [content]);
      parser.advanceAfterBlockEnd();

      return tag;
    },

    process(_: any, content: () => string) {
      const contentString = content();
      const markedString = renderNxGSMarkdown(contentString);
      return markedString;
    },
  };
}
