import type { Dispatch, FormEvent } from 'react';
import type { EditorState, Indent, Theme } from './types';
import languages from './languages';

interface Props {
  themes: Theme[];
  state: EditorState;
  setState: Dispatch<EditorState>;
}

export default function Settings({ themes, state, setState }: Props) {
  const handleThemeChange = (e: FormEvent<HTMLSelectElement>) => {
    const theme = themes.find((i) => i.name === e.target.value) as Theme;
    setState({ ...state, theme });
  };

  return (
    <div
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
                value={state.lang.highlight}
                onChange={(e) =>
                  setState({ ...state, lang: languages[e.target.value] })
                }
              >
                {Object.keys(languages).map((l, i) => (
                  <option key={i}>{l}</option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
