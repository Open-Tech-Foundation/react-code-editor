import type { EditorState, Theme, Token } from './types';

type CodeTokenObj = { t: string; v: string };

type CodeTokens = (CodeTokenObj | string)[];

function render(codeTokens: CodeTokens, theme: Theme) {
  let out = '';
  codeTokens.forEach((ct) => {
    if (typeof ct !== 'string') {
      out += `<span style="${theme.getStyles(ct.t)}">${ct.v}</span>`;
      return;
    }
    out += ct;
  });

  return out;
}

function matchTokens(s: string, tokens: Token[]) {
  const matchArr: CodeTokens = [];
  let match: RegExpMatchArray | null = null;
  const tk = tokens.find((tk) => {
    match = s.match(tk.p);
    return match !== null;
  });

  if (match) {
    const prefix = s.slice(0, (match as RegExpMatchArray).index);
    if (prefix) {
      const arr = matchTokens(prefix, tokens);
      if (arr.some((i) => typeof i === 'string')) {
        matchArr.push(s);
        return matchArr;
      }
      matchArr.push(...arr);
    }

    matchArr.push({ t: tk?.t as string, v: match[0] });

    const suffix = s.slice(
      ((match as RegExpMatchArray).index as number) +
        (match[0] as string).length
    );
    if (suffix) {
      const arr = matchTokens(suffix, tokens);
      matchArr.push(...arr);
    }
  } else {
    matchArr.push(s);
  }

  return matchArr;
}

function transform(code: string, tokens: Token[], codeTokens: CodeTokens) {
  let str = '';

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if (char === '\t') {
      codeTokens.push(char);
      continue;
    }

    if (char === ' ' || char === '\n') {
      const arr = matchTokens(str + char, tokens);

      if (!arr.some((i) => typeof i === 'string')) {
        str = '';
      }

      arr.forEach((m) => {
        if (typeof m === 'string') {
          str = m;
        } else {
          codeTokens.push(m);
        }
      });

      if (str === char) {
        codeTokens.push(char);
        str = '';
      }
      continue;
    }

    str += char;
  }

  codeTokens.push(...matchTokens(str, tokens));
}

export default function highlightSyntax(state: EditorState) {
  const codeTokens: CodeTokens = [];

  if (state.lang.tokens.length === 0) {
    return state.value;
  }

  transform(state.value, state.lang.tokens, codeTokens);

  return render(codeTokens, state.theme);
}
