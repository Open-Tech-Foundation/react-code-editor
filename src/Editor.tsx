import { useState } from 'react';

import Header from './Header';
import EditorContent from './EditorContent';
import Settings from './Settings';
import type { Config, EditorProps, EditorState, Theme } from './types';

export default function Editor({
  value,
  themes = [],
  theme,
  style,
  title = '',
  lang,
  config,
}: EditorProps) {
  const curConfig: Config = {
    indent: config?.indent || 'Space',
    indentSize: config?.indentSize || 2,
    textArea: config?.textArea || {},
  };
  const [state, setState] = useState<EditorState>({
    value,
    errors: '',
    showErrors: false,
    showSettings: false,
    theme: themes.find((i) => i.name === theme) || (themes[0] as Theme),
    lang,
    isTabKey: false,
    selectionStart: 0,
    config: curConfig,
  });

  return (
    <div
      style={{
        ...style,
        border: '1px solid lightgray',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <Header title={title} state={state} setState={setState} />
      <EditorContent setState={setState} state={state} />
      {state.showErrors && (
        <div
          style={{
            background: 'rgb(253, 237, 237)',
            color: 'rgb(95, 33, 32)',
            padding: '15px',
            boxSizing: 'border-box',
            width: '100%',
            height: 'calc(100% - 30px)',
            overflow: 'auto',
            position: 'absolute',
            top: '30px',
            left: '0px',
            zIndex: '2',
          }}
        >
          <pre>{state.errors}</pre>
        </div>
      )}
      {state.showSettings && (
        <Settings themes={themes} state={state} setState={setState} />
      )}
    </div>
  );
}
