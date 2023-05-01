import prettier from 'prettier/esm/standalone.mjs';
import babelParser from 'prettier/esm/parser-babel.mjs';

export default function Header({ title, state, setState }) {
  const handleFormat = () => {
    try {
      const value = prettier.format(state.value, {
        parser: 'babel',
        plugins: [babelParser],
      });
      setState({ ...state, value, errors: '' });
    } catch (error: unknown) {
      setState({ ...state, errors: (error as Error).message });
    }
  };
  return (
    <div
      style={{
        boxSizing: 'border-box',
        height: '30px',
        padding: '5px 10px',
        background: '#0074D9',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        style={{ fontSize: '12px', fontWeight: 'bold', userSelect: 'none' }}
      >
        {title}
      </span>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {state.errors.length > 0 && (
          <button
            title="Errors"
            style={{
              marginRight: '10px',
              fontSize: '12px',
              border: '0px',
              padding: '0px 5px',
              background: 'white',
              cursor: 'pointer',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() =>
              setState({ ...state, showErrors: !state.showErrors })
            }
          >
            <svg
              style={{ fill: 'red', width: '20px' }}
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
            </svg>
            <span style={{ color: 'red' }}>Errors</span>
          </button>
        )}
        <button
          style={{
            marginRight: '10px',
            fontSize: '12px',
            border: 0,
            padding: 0,
            background: 'inherit',
            cursor: 'pointer',
          }}
          onClick={handleFormat}
          title="Format"
        >
          <svg
            style={{ fill: 'white', width: '20px' }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"></path>
          </svg>
        </button>
        <button
          title="Settings"
          style={{
            border: 0,
            padding: 0,
            margin: 0,
            background: 'inherit',
            cursor: 'pointer',
          }}
          onClick={() =>
            setState({
              ...state,
              showErrors: false,
              showSettings: !state.showSettings,
            })
          }
        >
          <svg
            style={{ fill: 'white', width: '20px' }}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
