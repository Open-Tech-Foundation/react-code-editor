export type Config = {
  tabSize: number;
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
