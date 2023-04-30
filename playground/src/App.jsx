import { Editor, githubTheme, githubDarkTheme } from '../../src';
import './App.css';

function App() {
  const code = `class MyClass {
    public static myValue: string;
    constructor(init: string) {
      this.myValue = init;
    }
  }
  import fs = require("fs");
  module MyModule {
    export interface MyInterface extends Other {
      myProperty: any;
    }
  }
  declare magicNumber number;
  myArray.forEach(() => { }); // fat arrow syntax`;
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
          <Editor
            code={code}
            themes={[githubTheme, githubDarkTheme]}
            theme="github-dark"
            style={{ height: '300px' }}
            title="TypeScript"
            lang="ts"
          />
          <Editor
            code={jsCode}
            themes={[githubTheme, githubDarkTheme]}
            theme="github"
            style={{ height: '300px', marginTop: '15px' }}
            title="JavaScript"
            lang="js"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
