import { useState } from 'react';

import Header from './Header';
import EditorContent from './EditorContent';
import Settings from './Settings';

export default function Editor({
  code,
  themes = [],
  theme,
  style,
  title = '',
  lang,
}) {
  const [state, setState] = useState({
    value: code,
    errors: '',
    showErrors: false,
    showSettings: false,
    theme: themes.find((i) => i.name === theme) || themes[0],
    lang,
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
