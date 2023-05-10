import React from 'react';
import { Editor } from '../../src';
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

  const jsonCode = `{"Actors":[{"name":"Tom Cruise","age":56,"Born At":"Syracuse, NY","Birthdate":"July 3, 1962","photo":"https://jsonformatter.org/img/tom-cruise.jpg","wife":null,"weight":67.5,"hasChildren":true,"hasGreyHair":false,"children":["Suri","Isabella Jane","Connor"]},{"name":"Robert Downey Jr.","age":53,"Born At":"New York City, NY","Birthdate":"April 4, 1965","photo":"https://jsonformatter.org/img/Robert-Downey-Jr.jpg","wife":"Susan Downey","weight":77.1,"hasChildren":true,"hasGreyHair":false,"children":["Indio Falconer","Avri Roel","Exton Elias"]}]}
 `;

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
            onChange={(v) => console.log(v)}
            style={{ height: '300px', marginTop: '15px' }}
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
