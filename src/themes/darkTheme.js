export default {
  name: "Dark",
  color: "#ddd",
  background: "#303030",
  getStyles: (className) => {
    switch (className) {
      case "hljs-keyword":
      case "hljs-literal":
      case "hljs-section":
      case "hljs-selector-tag":
        return "color: #fff; font-weight: normal";
      case "hljs-link":
        return "color: '#fff'";
      case "hljs-name":
        return "font-weight: normal; color: #d88";
      case "hljs-addition":
      case "hljs-attribute":
      case "hljs-built_in":
      case "hljs-bullet":
      case "hljs-string":
      case "hljs-symbol":
      case "hljs-template-tag":
      case "hljs-template-variable":
      case "hljs-variable":
        return "color: #d88";
      case "hljs-title":
      case "hljs-type":
        return "color: #d88; font-weight: normal";
      case "hljs-comment":
      case "hljs-deletion":
      case "hljs-meta":
      case "hljs-quote":
        return "color: #979797";
      case "hljs-doctag":
      case "hljs-strong":
        return "font-weight: normal";
      case "hljs-emphasis":
        return "fontStyle: italic";
    }
  },
};
