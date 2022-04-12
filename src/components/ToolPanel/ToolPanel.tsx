import * as React from 'react';
import { InlineStyle, BlockType } from '../TextEditor/config';
import { useEditorApi } from 'src/context';
import { Button } from '@chakra-ui/react';

export type ToolPanelProps = {
  className?: string;
};

const BLOCK_TYPES_CODES = Object.values(BlockType);
const INLINE_STYLES_CODES = Object.values(InlineStyle);

export const ToolPanel: React.FC<ToolPanelProps> = ({ className }) => {
  const {
    toggleBlockType,
    toggleInlineStyle,
    hasInlineStyle,
    addLink,
    toHtml,
  } = useEditorApi();
  const handlerAddLink = () => {
    const url = prompt('URL:');

    if (url) {
      addLink(url);
    }
  };
  return (
    <div className={`tool-panel ${className}`}>
      <Button onClick={handlerAddLink}>Добавить ссылку</Button>
      <button onClick={toHtml}>Print</button>
      {BLOCK_TYPES_CODES.map((code) => {
        const onMouseDown = (e) => {
          e.preventDefault();
          toggleBlockType(code);
          toggleInlineStyle(code);
        };

        return (
          <Button
            size="sm"
            key={code}
            color={hasInlineStyle(code) ? 'white' : 'inherit'}
            background={hasInlineStyle(code) ? 'blue.500' : 'inherit'}
            onMouseDown={onMouseDown}
          >
            {code}
          </Button>
        );
      })}
      {INLINE_STYLES_CODES.map((code) => {
        const onMouseDown = (e) => {
          e.preventDefault();
          toggleInlineStyle(code);
        };

        return (
          <Button
            size="sm"
            key={code}
            color={hasInlineStyle(code) ? 'white' : 'inherit'}
            background={hasInlineStyle(code) ? 'blue.500' : 'inherit'}
            onMouseDown={onMouseDown}
          >
            {code}
          </Button>
        );
      })}
    </div>
  );
};
