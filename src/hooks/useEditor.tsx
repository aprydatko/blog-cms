import * as React from 'react';
import {
  convertFromRaw,
  EditorState,
  RichUtils,
  CompositeDecorator,
  DraftEntityMutability,
  DraftEditorCommand,
  getDefaultKeyBinding,
  KeyBindingUtil,
} from 'draft-js';
import {
  BlockType,
  EntityType,
  InlineStyle,
  KeyCommand,
} from 'src/components/TextEditor/config';
import LinkDecorator from 'src/components/TextEditor/Link';
import { HTMLtoState, stateToHTML } from 'src/components/TextEditor/convert';

const decorator = new CompositeDecorator([LinkDecorator]);

const initialData = {
  blocks: [
    {
      key: '98peq',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};

export type EditorApi = {
  state: EditorState;
  onChange: (state: EditorState) => void;
  toggleBlockType: (blockType: BlockType) => void;
  currentBlockType: BlockType;
  toggleInlineStyle: (blockType: BlockType) => void;
  hasInlineStyle: (blockType: BlockType) => boolean;
  addLink: (url: string) => void;
  setEntityData: (entityKey: string, data: EditorState) => void;
  handleKeyCommand: (command: KeyCommand, editorState: EditorState) => string;
  handlerKeyBinding: (e: React.KeyboardEvent) => string;
  toHtml: () => any;
};

export const useEditor = (): EditorApi => {
  // const [state, setState] = React.useState(() =>
  //   EditorState.createWithContent(convertFromRaw(initialData))
  // );

  // const [state, setState] = React.useState(() =>
  //   EditorState.createEmpty(decorator)
  // );

  const data = `<div>
    <h1>Заголовок страницы</h1>
    <p>Это просто паарграф страницы <strong>жирный текст</strong></p>
  </div>`;

  const [state, setState] = React.useState(() =>
    EditorState.createWithContent(HTMLtoState(data), decorator)
  );

  const toggleBlockType = React.useCallback((blockType: BlockType) => {
    setState((currentState) =>
      RichUtils.toggleBlockType(currentState, blockType)
    );
  }, []);

  const currentBlockType = React.useMemo(() => {
    const selection = state.getSelection();
    const content = state.getCurrentContent();
    const block = content.getBlockForKey(selection.getStartKey());
    return block.getType() as BlockType;
  }, [state]);

  const toggleInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
    setState((currentState) =>
      RichUtils.toggleInlineStyle(currentState, inlineStyle)
    );
  }, []);

  const hasInlineStyle = React.useCallback(
    (inlineStyle: InlineStyle) => {
      /* Получаем иммутабельный Set с ключами стилей */
      const currentStyle = state.getCurrentInlineStyle();
      /* Проверяем содержится ли там переданный стиль */
      return currentStyle.has(inlineStyle);
    },
    [state]
  );

  const addEntity = React.useCallback(
    (
      entityType: EntityType,
      data: Record<string, string>,
      mutability: DraftEntityMutability
    ) => {
      setState((currentState) => {
        /* Получаем текущий контент */
        const contentState = currentState.getCurrentContent();
        /* Создаем Entity с данными */
        const contentStateWithEntity = contentState.createEntity(
          entityType,
          mutability,
          data
        );
        /* Получаем уникальный ключ Entity */
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        /* Обьединяем текущее состояние с новым */
        const newState = EditorState.set(currentState, {
          currentContent: contentStateWithEntity,
        });
        /* Вставляем ссылку в указанное место */
        return RichUtils.toggleLink(
          newState,
          newState.getSelection(),
          entityKey
        );
      });
    },
    []
  );

  const setEntityData = React.useCallback((entityKey, data) => {
    setState((currentState) => {
      /* Получаем текущий контент */
      const content = currentState.getCurrentContent();
      /* Объединяем текущие данные Entity с новыми */
      const contentStateUpdated = content.mergeEntityData(entityKey, data);
      /* Обновляем состояние редактора с указанием типа изменения */
      return EditorState.push(
        currentState,
        contentStateUpdated,
        'apply-entity'
      );
    });
  }, []);

  const addLink = React.useCallback(
    (url) => {
      addEntity(EntityType.link, { url }, 'MUTABLE');
    },
    [addEntity]
  );

  const handleKeyCommand = React.useCallback(
    (command: KeyCommand, editorState: EditorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);

      if (command === 'accent') {
        toggleInlineStyle(InlineStyle.ACCENT);
        return 'handled';
      }

      if (newState) {
        setState(newState);
        return 'handled';
      }

      return 'not-handled';
    },
    []
  );

  const handlerKeyBinding = React.useCallback((e: React.KeyboardEvent) => {
    /* Проверяем нажата ли клавиша q + ctrl/cmd */
    if (e.keyCode === 81 && KeyBindingUtil.hasCommandModifier(e)) {
      return 'accent';
    }

    return getDefaultKeyBinding(e);
  }, []);

  const toHtml = React.useCallback(() => {
    return stateToHTML(state.getCurrentContent());
  }, [state]);

  return React.useMemo(
    () => ({
      state,
      onChange: setState,
      toggleBlockType,
      currentBlockType,
      toggleInlineStyle,
      hasInlineStyle,
      addLink,
      setEntityData,
      handleKeyCommand,
      handlerKeyBinding,
      toHtml,
    }),
    [state]
  );
};
