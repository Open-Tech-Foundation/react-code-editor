import type { Dispatch } from 'react';
import type { EditorState, Theme } from './types';

interface Props {
  themes: Theme[];
  state: EditorState;
  setState: Dispatch<EditorState>;
}

export default function Settings({ themes, state, setState }: Props) {
  const handleThemeChange = (e) => {
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
            <td>Theme: </td>
            <td>
              <select value={state.theme.name} onChange={handleThemeChange}>
                {themes.map((t, i) => (
                  <option key={i}>{t.name}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>Tab Size: </td>
            <td>
              <input
                type="number"
                value={state.config.tabSize}
                onChange={(e) =>
                  setState({
                    ...state,
                    config: {
                      ...state.config,
                      tabSize: parseInt(e.target.value),
                    },
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
