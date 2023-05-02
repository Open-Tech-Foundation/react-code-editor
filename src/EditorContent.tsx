import { Dispatch, useEffect, useRef } from 'react';
import { insertAt } from '@opentf/utils';
import highlightSyntax from './highlightSyntax';
import type { EditorState } from './types';

interface Props {
  state: EditorState;
  setState: Dispatch<EditorState>;
}

export default function EditorContent({ state, setState }: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const hlCode = highlightSyntax(
    state.value,
    state.lang.highlight,
    state.theme
  );
  const newLinesMatch = [...hlCode.matchAll(/\n/g)];

  useEffect(() => {
    if (textAreaRef.current !== null && state.isTabKey) {
      textAreaRef.current.setSelectionRange(
        state.selectionStart + state.config.indentSize,
        state.selectionStart + state.config.indentSize
      );
    }
    setState({ ...state, isTabKey: false });
  }, [state.selectionStart, state.isTabKey]);

  return (
    <div
      style={{
        boxSizing: 'border-box',
        color: state.theme.color,
        background: state.theme.background,
        height: 'calc(100% - 30px)',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          backgroundColor: state.theme.name.toLowerCase().includes('dark')
            ? 'inherit'
            : '#f5f5f5',
          color: state.theme.name.toLowerCase().includes('dark')
            ? 'lightgray'
            : '#6c6c6c',
          borderRight: '1px solid #ddd',
          padding: '10px 0px',
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 1,
          userSelect: 'none',
        }}
      >
        {new Array(newLinesMatch.length + 1).fill('').map((a, i) => (
          <div
            key={i}
            style={{
              textAlign: 'right',
              marginBottom: '2px',
              fontSize: '14px',
              padding: '0px 4px',
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div
        style={{
          boxSizing: 'border-box',
          position: 'relative',
          textAlign: 'left',
          padding: '0px',
        }}
      >
        <pre
          style={{
            userSelect: 'none',
            margin: '0px',
            border: '0px',
            background: 'none',
            boxSizing: 'inherit',
            display: 'inherit',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontStyle: 'inherit',
            fontVariantLigatures: 'inherit',
            fontWeight: 'inherit',
            letterSpacing: 'inherit',
            lineHeight: 'inherit',
            tabSize: 'inherit',
            textIndent: 'inherit',
            textRendering: 'inherit',
            textTransform: 'inherit',
            position: 'relative',
            pointerEvents: 'none',
            padding: '10px',
            whiteSpace: 'pre',
            overflow: 'hidden',
          }}
          dangerouslySetInnerHTML={{ __html: hlCode }}
        />
        <textarea
          ref={textAreaRef}
          spellCheck={false}
          value={state.value}
          onChange={(e) => setState({ ...state, value: e.target.value })}
          onKeyDown={(e) => {
            const indentChar = state.config.indent === 'Tab' ? '\t' : ' ';
            if (e.key === 'Tab') {
              e.preventDefault();
              const { selectionStart } = e.target;
              setState({
                ...state,
                value: insertAt(
                  state.value,
                  selectionStart,
                  indentChar.repeat(state.config.indentSize)
                ),
                selectionStart,
                isTabKey: true,
              });
            }
          }}
          style={{
            margin: '0px',
            border: '0px',
            background: 'none',
            boxSizing: 'inherit',
            display: 'inherit',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontStyle: 'inherit',
            fontVariantLigatures: 'inherit',
            fontWeight: 'inherit',
            letterSpacing: 'inherit',
            lineHeight: 'inherit',
            tabSize: 'inherit',
            textIndent: 'inherit',
            textRendering: 'inherit',
            textTransform: 'inherit',
            position: 'absolute',
            top: '0px',
            left: '0px',
            height: '100%',
            width: '100%',
            resize: 'none',
            color: 'inherit',
            WebkitFontSmoothing: 'antialiased',
            WebkitTextFillColor: 'transparent',
            padding: '10px',
            outline: 'none',
            whiteSpace: 'pre',
            overflow: 'hidden',
          }}
          {...state.config.textArea}
        />
      </div>
    </div>
  );
}
