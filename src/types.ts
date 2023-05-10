import type { Languages, Themes } from './constants';

export type Indent = 'Tab' | 'Space';

export type Config = {
  indent: Indent;
  indentSize: number;
  textArea: Record<string, unknown>;
};

export type Theme = {
  name: string;
  color: string;
  background: string;
  getStyles: (className: string) => string;
};

export interface EditorState {
  value: string;
  errors: string[];
  warnings: string[];
  showSettings: boolean;
  showProblems: boolean;
  theme: Theme;
  lang: Lang;
  cursorPos: [number, number];
  config: Config;
  setCursor: boolean;
}
export interface EditorProps {
  value: string;
  themes?: Theme[];
  languages?: Lang[];
  lang?: (typeof Languages)[number];
  theme?: (typeof Themes)[number];
  style?: Record<string, string>;
  title?: string;
  config?: Partial<Config>;
}

export interface Token {
  t: string;
  p: string;
  s: boolean;
  b: string;
}

export type Lang = {
  name: string;
  parser: string | null;
  tokens: Token[];
};
