import type languages from './languages';

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
  errors: string;
  showErrors: boolean;
  showSettings: boolean;
  theme: Theme;
  lang: Lang;
  isTabKey: boolean;
  selectionStart: number;
  config: Config;
}
export interface EditorProps {
  value: string;
  themes: Theme[];
  lang?: keyof typeof languages;
  theme?: string;
  style?: Record<string, string>;
  title?: string;
  config?: Partial<Config>;
}

export type Lang = {
  highlight: string;
  parser: string | null;
};
