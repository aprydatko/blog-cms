import * as React from 'react';
import { Editor } from 'draft-js';
import { useEditorApi } from 'src/context';
import './TextEditor.module.scss';
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from './config';

export type TextEditorProps = {
  className?: string;
};

export const TextEditor: React.FC<TextEditorProps> = ({ className }) => {
  const { state, onChange, handleKeyCommand } = useEditorApi();

  return (
    <div className={`text-editor ${className}`}>
      <Editor
        // placeholder="Введите ваш текст"
        editorState={state}
        onChange={onChange}
        blockRenderMap={BLOCK_RENDER_MAP}
        customStyleMap={CUSTOM_STYLE_MAP}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
};
