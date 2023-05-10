import type { EditorState } from './types';

function startsWith(s: string, re: string) {
  const match = new RegExp(re).exec(s);
  return match && match.index === 0;
}

type CodeToken = ({ t: string; v: string } | string)[];

export default function highlightSyntax(state: EditorState) {
  if (state.lang.tokens.length === 0) {
    return state.value;
  }

  let str = '';
  let out = '';
  const codeTokens: CodeToken = [];
  const spaceTokens = state.lang.tokens.filter((t) => t.s);

  function setCodeTokens(s: string) {
    let i = 0;
    let match;
    const tk = state.lang.tokens.find((tk) => {
      match = s.match(tk.p);
      return match !== null;
    });

    if (match) {
      const first = s.slice(i, (match as RegExpExecArray).index);

      if (first) {
        i += first.length;
        codeTokens.push(setCodeTokens(first));
      }

      codeTokens.push({ t: tk?.t as string, v: match[0] });
      i += (match[0] as string).length;
      const last = s.slice(i);
      if (last) {
        i += last.length;
        codeTokens.push(setCodeTokens(last));
      }
    }

    return s.slice(i);
  }

  for (let i = 0; i < state.value.length; i++) {
    const char = state.value[i];

    if (char === '\t') {
      codeTokens.push(char);
      continue;
    }

    if (char === ' ') {
      const matchBegin = spaceTokens.some((stk) => startsWith(str, stk.b));
      if (matchBegin) {
        str += char;
      } else {
        codeTokens.push(char);
        setCodeTokens(str);
      }
      continue;
    }

    if (char === '\n') {
      str = setCodeTokens(str);
      codeTokens.push(char);
      continue;
    }

    str += char;
  }

  codeTokens.push(setCodeTokens(str));

  codeTokens.forEach((ct) => {
    if (typeof ct === 'object') {
      out += `<span style="${state.theme.getStyles(ct.t)}">${ct.v}</span>`;
      return;
    }
    out += ct;
  });

  return out;
}
