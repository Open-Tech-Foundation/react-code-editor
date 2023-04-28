import hljs from "highlight.js/lib/common";

export default function highlightSyntax(code, lang, theme) {
  const hlCode = hljs.highlight(code, { language: lang }).value;
  const regexp = /class="(.+?)"/g;
  const matches = hlCode.matchAll(regexp);
  let str = "";
  let curIndex = 0;

  for (const match of matches) {
    str += hlCode.substring(curIndex, match.index);
    const className = match[1].split(" ").find((i) => i.includes("hljs"));
    str += `style="${theme.getStyles(className)}"`;
    curIndex = match.index + match[0].length;
  }

  str += hlCode.substring(curIndex, hlCode.length);

  return str;
}
