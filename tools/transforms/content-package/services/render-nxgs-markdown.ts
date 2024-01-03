import { marked } from 'marked';
import {
  applyTableRenderer,
  applyCodeRenderer,
  applyBlockQuoteRenderer,
  applyHeadingRenderer,
  applyLinkRenderer,
} from './renderer';

export type RenderNxGSMarkdown = (content: string) => string;

export function renderNxGSMarkdown() {
  const renderer = new marked.Renderer();

  applyTableRenderer(renderer);
  applyCodeRenderer(renderer);
  applyLinkRenderer(renderer);
  applyHeadingRenderer(renderer);
  applyBlockQuoteRenderer(renderer);

  return (content: string) => marked(content, { renderer });
}
