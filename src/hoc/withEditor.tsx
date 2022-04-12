import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  getDefaultKeyBinding,
} from 'draft-js';

// import './blog-editor.module.scss';

const initialData = {
  blocks: [
    {
      key: '16d0k',
      text: 'You can edit this text.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [{ offset: 0, length: 23, style: 'BOLD' }],
      entityRanges: [],
      data: {},
    },
    {
      key: '98peq',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'ecmnc',
      text: 'Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        { offset: 0, length: 14, style: 'BOLD' },
        { offset: 133, length: 9, style: 'BOLD' },
      ],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
];

export const withEditor = (WrappedComponent) => {
  return (props) => {
    const [editorState, setEditorState] = useState(() =>
      EditorState.createWithContent(convertFromRaw(initialData))
    );
    const inputRef = useRef();

    useEffect(() => {
      console.log('hoc withEditor');
      inputRef.current.focus();
    }, [inputRef]);

    const onChange = (editorState) => {
      setEditorState(editorState);
    };

    const toggleBlockType = (blockType) => {
      console.log('blockType', blockType);
      onChange(RichUtils.toggleBlockType(editorState, blockType));
    };

    const toggleInlineStyle = (inlineStyle) => {
      onChange(RichUtils.toggleBlockType(editorState, inlineStyle));
    };

    const onBoldClick = () => {
      onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    const StyleButton = (props) => {
      const onToggle = (e) => {
        e.preventDefault();
        props.onToggle(props.style);
      };

      return (
        <Box
          as="span"
          px={2}
          color={props.active ? '#5890ff' : '#999'}
          onMouseDown={onToggle}
          cursor="pointer"
        >
          {props.label}
        </Box>
      );
    };

    const BlockStyleControls = () => {
      const selection = editorState.getSelection();
      const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

      return (
        <Box p={2}>
          {BLOCK_TYPES.map((type) => (
            <StyleButton
              key={type.label}
              active={type.style === blockType}
              label={type.label}
              onToggle={props.onToggle}
              style={type.style}
            />
          ))}
        </Box>
      );
    };

    console.log('editorState', editorState);

    return (
      <div>
        <BlockStyleControls onToggle={toggleBlockType} />
        <div>inlineStyleControls</div>
        <button onMouseDown={onBoldClick}>Bold</button>
        <WrappedComponent
          blockTypes={BLOCK_TYPES}
          toggleBlockType={toggleBlockType}
          onBoldClick={onBoldClick}
          editorState={editorState}
          onChange={onChange}
          inputRef={inputRef}
          className={className}
          {...props}
        />
      </div>
    );
  };
};
