import highlightSyntax from './highlightSyntax';

export default function EditorContent({ state, setState }) {
  const hlCode = highlightSyntax(state.value, state.lang, state.theme);
  const newLinesMatch = [...hlCode.matchAll(/\n/g)];

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
              padding: '0px 5px',
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
          spellCheck={false}
          value={state.value}
          onChange={(e) => setState({ ...state, value: e.target.value })}
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
        />
      </div>
    </div>
  );
}
