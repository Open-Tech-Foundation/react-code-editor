export default function Settings({ themes, state, setState }) {
  const handleThemeChange = (e) => {
    const theme = themes.find((i) => i.name === e.target.value);
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
        </tbody>
      </table>
    </div>
  );
}
