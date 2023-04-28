import { Editor, darkTheme } from "../../src";
import "./App.css";

function App() {
  // const code = `function $initHighlight(block, cls) {
  //   try {
  //     if (cls.search(/\bno\\-highlight\b/) != -1)
  //       return process(block, true, 0x0F) +
  //              \` class="\${cls}"\`;
  //   } catch (e) {
  //     /* handle exception */
  //   }
  //   for (var i = 0 / 2; i < classes.length; i++) {
  //     if (checkCondition(classes[i]) === undefined)
  //       console.log('undefined');
  //   }
  
  //   return (
  //     <div>
  //       <web-component>{block}</web-component>
  //     </div>
  //   )
  // }
  
  // export  $initHighlight;`;
  const code = `function Test () { return "hello" }`;

  return (
    <div className="App">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div></div>
        <Editor code={code} themes={[darkTheme]} style={{ height: "300px" }} title="JavaScript" />
        <div></div>
      </div>
    </div>
  );
}

export default App;
