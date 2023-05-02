import React from 'react';
import { Editor, githubTheme, githubDarkTheme } from '../../src';
import './App.css';

function App() {
  const jsxCode = `import React from "react";
  import ReactDOM from "react-dom";
  
  function App() {
    return (
      <h1>Hello world</h1>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));`;

  const jsonCode = `[
    {
      "title": "apples",
      "count": [12000, 20000],
      "description": {"text": "...", "sensitive": false}
    },
    {
      "title": "oranges",
      "count": [17500, null],
      "description": {"text": "...", "sensitive": false}
    }
  ]`;

  const cssCode = `@font-face {
    font-family: Chunkfive; src: url('Chunkfive.otf');
  }
  
  body, .usertext {
    color: #F0F0F0; background: #600;
    font-family: Chunkfive, sans;
    --heading-1: 30px/32px Helvetica, sans-serif;
  }
  
  @import url(print.css);
  @media print {
    a[href^=http]::after {
      content: attr(href)
    }
  }`;

  return (
    <div className="App">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 500px 1fr' }}>
        <div></div>
        <div>
          {/* <Editor
            code={code}
            themes={[githubTheme, githubDarkTheme]}
            theme="github-dark"
            style={{ height: '300px' }}
            title="TypeScript"
            lang="js"
          /> */}
          <Editor
            value={jsonCode}
            themes={[githubTheme, githubDarkTheme]}
            style={{ height: '300px', marginTop: '15px' }}
            title="config.json"
            lang="JSON"
            // config={{ textArea: { readOnly: true } }}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
