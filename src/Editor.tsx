import { useState } from 'react';

import Header from './Header';
import highlightSyntax from './highlightSyntax';
import EditorContent from './EditorContent';

export default function Editor({
  code,
  themes = [],
  theme = 'Dark',
  style,
  title = '',
  lang,
}) {
  const [state, setState] = useState({
    value: code,
    errors: '',
    showErrors: false,
  });
  const curTheme = themes.find((i) => i.name === theme);
  const hlCode = highlightSyntax(state.value, lang, curTheme);

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
      <EditorContent
        hlCode={hlCode}
        setState={setState}
        state={state}
        theme={curTheme}
      />
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
    </div>
  );
}
