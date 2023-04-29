import React, { useState } from 'react';
import Header from './Header';
import highlightSyntax from './highlightSyntax';

export default function Editor({
  code,
  themes = [],
  theme = 'Dark',
  style,
  title = '',
}) {
  const [value, setValue] = useState(code);
  const curTheme = themes.find((i) => i.name === theme);
  const hlCode = highlightSyntax(value, 'js', curTheme);

  const newLinesMatch = [...hlCode.matchAll(/\n/g)];

  return (
    <div
      style={{
        ...style,
        border: '1px solid lightgray',
        boxSizing: 'border-box',
      }}
    >
      <Header title={title} />
      <div
        style={{
          boxSizing: 'border-box',
          color: curTheme.color,
          background: curTheme.background,
          height: 'calc(100% - 30px)',
          overflow: 'hidden auto',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
        }}
      >
        <div
          style={{
            backgroundColor: '#f5f5f5',
            color: '#6c6c6c',
            borderRight: '1px solid #ddd',
            padding: '10px 0px',
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
            overflow: 'hidden',
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
              whiteSpace: 'pre-wrap',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              position: 'relative',
              pointerEvents: 'none',
              padding: '10px',
            }}
            dangerouslySetInnerHTML={{ __html: hlCode }}
          />
          <textarea
            spellCheck={false}
            value={value}
            onChange={(e) => setValue(e.target.value)}
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
              whiteSpace: 'pre-wrap',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              position: 'absolute',
              top: '0px',
              left: '0px',
              height: '100%',
              width: '100%',
              resize: 'none',
              color: 'inherit',
              overflow: 'hidden',
              WebkitFontSmoothing: 'antialiased',
              WebkitTextFillColor: 'transparent',
              padding: '10px',
              outline: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}
