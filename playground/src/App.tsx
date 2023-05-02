import React from 'react';
import { Editor, githubTheme, githubDarkTheme } from '../../src';
import './App.css';

function App() {
  const code = `import React, { useState } from "react";
  import ReactDOM from "react-dom";
  
  import "./styles.css";
  import Editor from "react-simple-code-editor";
  import { highlight, languages } from "prismjs/components/prism-core";
  import "prismjs/components/prism-clike";
  import "prismjs/components/prism-javascript";
  import "prismjs/themes/prism.css";
  
  const code = \`function add(a, b) {
    return a + b;
  }
  
  const a = 123;
  \`;
  
  const hightlightWithLineNumbers = (input, language) =>
    highlight(input, language)
      .split("\n")
      .map((line, i) => \`<span class='editorLineNumber'>\${i + 1}</span>\${line}\`)
      .join("\n");
  
  function App() {
    const [codeValue, setCodeValue] = useState(code);
  
    return (
      <Editor
        value={codeValue}
        onValueChange={code => setCodeValue(code)}
        highlight={code => hightlightWithLineNumbers(code, languages.js)}
        padding={10}
        textareaId="codeArea"
        className="editor"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 18,
          outline: 0
        }}
      />
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  `;

  const jsCode = `import React from "react";
  import ReactDOM from "react-dom";
  
  function App() {
    return (
      <h1>Hello world</h1>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));`;

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
            value={jsCode}
            themes={[githubTheme, githubDarkTheme]}
            style={{ height: '300px', marginTop: '15px' }}
            title="App.jsx"
            lang="js"
            // config={{ textArea: { readOnly: true } }}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
