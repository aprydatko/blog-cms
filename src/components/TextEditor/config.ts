import Immutable from 'immutable';
import { DefaultDraftBlockRenderMap, DraftEditorCommand } from 'draft-js';

export type KeyCommand = DraftEditorCommand | 'accent';

export enum BlockType {
  /* Заголовки */
  h1 = 'header-one',
  h2 = 'header-two',
  h3 = 'header-three',
  h4 = 'header-four',
  h5 = 'header-five',
  h6 = 'header-six',
  /* Цитата */
  blockquote = 'blockquote',
  /* Блок с кодом */
  code = 'code-block',
  /* Список */
  list = 'unordered-list-item',
  /* Нумерованный список */
  orderList = 'ordered-list-item',
  /* Сноска */
  cite = 'cite',
  /* Простой текст */
  default = 'unstyled',
}

export enum InlineStyle {
  BOLD = 'BOLD',
  ITALIC = 'ITALIC',
  UNDERLINE = 'UNDERLINE',
  ACCENT = 'ACCENT',
}

export enum EntityType {
  link = 'link',
}

const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
  [BlockType.cite]: {
    element: 'cite',
  },
});

export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(
  CUSTOM_BLOCK_RENDER_MAP
);

export const CUSTOM_STYLE_MAP = {
  [InlineStyle.ACCENT]: {
    backgroundColor: '#F7F6F3',
    color: '#A41E68',
  },
};
