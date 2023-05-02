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
  lang: string;
  isTabKey: boolean;
  selectionStart: number;
  config: Config;
}
export interface EditorProps {
  value: string;
  lang: string;
  themes: Theme[];
  theme?: string;
  style?: Record<string, string>;
  title?: string;
  config?: Partial<Config>;
}
