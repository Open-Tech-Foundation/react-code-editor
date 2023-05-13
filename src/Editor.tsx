import { useEffect, useState } from 'react';
import Header from './Header';
import EditorContent from './EditorContent';
import Settings from './Settings';
import lightTheme from './themes/light';
import type { Config, EditorProps, EditorState, Lang, Theme } from './types';
import Problems from './Problems';
import darkTheme from './themes/dark';
import jsonLang from './languages/json';
import plainTextLang from './languages/plainText';

export default function Editor(props: EditorProps) {
  const languages: Lang[] = [
    jsonLang as unknown as Lang,
    plainTextLang,
    ...(props.languages || []),
  ];
  const themes = [lightTheme, darkTheme, ...(props.themes || [])];
  const config: Config = {
    indent: props.config?.indent || 'Space',
    indentSize: props.config?.indentSize || 2,
    textArea: props.config?.textArea || {},
  };
  const [state, setState] = useState<EditorState>({
    value: props.value,
    errors: [],
    warnings: [],
    showSettings: false,
    showProblems: false,
    theme: themes.find((i) => i.name === (props.theme || 'Light')) as Theme,
    lang: languages.find(
      (i) => i.name === (props.lang || 'Plain Text')
    ) as Lang,
    cursorPos: [0, 0],
    config,
    setCursor: false,
  });

  useEffect(() => {
    setState({
      ...state,
      value: props.value,
    });
  }, [props.value]);

  useEffect(() => {
    setState({
      ...state,
      theme: themes.find((i) => i.name === (props.theme || 'Light')) as Theme,
    });
  }, [props.theme]);

  useEffect(() => {
    setState({
      ...state,
      lang: languages.find(
        (i) => i.name === (props.lang || 'Plain Text')
      ) as Lang,
    });
  }, [props.lang]);

  const renderContent = () => {
    if (state.showSettings) {
      return (
        <Settings
          themes={themes}
          languages={languages}
          state={state}
          setState={setState}
        />
      );
    }

    if (state.showProblems) {
      return <Problems state={state} setState={setState} />;
    }

    return null;
  };

  return (
    <div
      style={{
        ...props.style,
        border: '1px solid lightgray',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <Header
        title={props.title || 'Untitled'}
        state={state}
        setState={setState}
        onChange={props.onChange}
      />
      <EditorContent
        setState={setState}
        state={state}
        onChange={props.onChange}
      />
      {renderContent()}
    </div>
  );
}
