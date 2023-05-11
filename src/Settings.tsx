import { Dispatch, FormEvent, useEffect, useRef } from 'react';
import type { EditorState, Indent, Lang, Theme } from './types';
interface Props {
  themes: Theme[];
  languages: Lang[];
  state: EditorState;
  setState: Dispatch<EditorState>;
}

export default function Settings({
  themes,
  languages,
  state,
  setState,
}: Props) {
  const settingsRef = useRef<HTMLDivElement>(null);

  const handleThemeChange = (e: FormEvent<HTMLSelectElement>) => {
    const theme = themes.find(
      (i) => i.name === (e.target as HTMLSelectElement).value
    ) as Theme;
    setState({ ...state, theme });
  };

  useEffect(() => {
    if (settingsRef.current !== null) {
      settingsRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={settingsRef}
      tabIndex={0}
      style={{
        background: 'white',
        color: 'black',
        padding: '15px',
        boxSizing: 'border-box',
        width: '100%',
        height: 'calc(100% - 30px)',
        overflow: 'auto',
        position: 'absolute',
        top: '30px',
        left: '0px',
        zIndex: '2',
      }}
      onKeyDown={(e) => {
        if (e.code === 'Escape') {
          e.preventDefault();
          setState({ ...state, showSettings: false });
        }
      }}
    >
      <p style={{ textAlign: 'center', margin: 0 }}>SETTINGS</p>
      <table>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>Theme: </td>
            <td>
              <select value={state.theme.name} onChange={handleThemeChange}>
                {themes.map((t, i) => (
                  <option key={i}>{t.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Indent: </td>
            <td>
              <select
                value={state.config.indent}
                onChange={(e) =>
                  setState({
                    ...state,
                    config: {
                      ...state.config,
                      indent: e.target.value as Indent,
                    },
                  })
                }
              >
                <option>Tab</option>
                <option>Space</option>
              </select>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Indent Size: </td>
            <td>
              <input
                type="number"
                value={state.config.indentSize}
                onChange={(e) =>
                  setState({
                    ...state,
                    config: {
                      ...state.config,
                      indentSize: parseInt(e.target.value),
                    },
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>Languages: </td>
            <td>
              <select
                value={state.lang.name}
                onChange={(e) =>
                  setState({
                    ...state,
                    lang: languages.find(
                      (l) => l.name === e.target.value
                    ) as Lang,
                  })
                }
              >
                {languages.map((l, i) => (
                  <option key={i}>{l.name}</option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
