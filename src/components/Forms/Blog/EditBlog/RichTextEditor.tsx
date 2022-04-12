import React, { Component, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
// import 'draft-js/dist/Draft.css';
// import './editBlog.module.scss';

const TextEditor = (props) => {
  console.log('props', props);
  return (
    <div id="BlogEditor-root" onClick={props.focus}>
      <Editor
        blockStyleFn={getBlockStyle}
        // customStyleMap={styleMap}
        editorState={props.editorState}
        onChange={props.onChange}
        placeholder="Поле для початку запису..."
        ref={props.inputRef}
        // spellCheck={true}
      />
    </div>
  );
};

export default TextEditor;

const getBlockStyle = (block) => {
  switch (block.getType()) {
    case 'header-one':
      return 'BlogEditor-header-one';
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
};
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};
