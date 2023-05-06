interface Props {
  errors: string[];
  warnings: string[];
}

export default function Problems({ errors, warnings }: Props) {
  return (
    <div
      style={{
        background: 'black',
        color: '#ff5555',
        boxSizing: 'border-box',
        width: '100%',
        height: 'calc(100% - 30px)',
        overflow: 'auto',
        position: 'absolute',
        top: '30px',
        left: '0px',
        zIndex: '2',
        lineHeight: '1.3',
        fontWeight: 'bold',
      }}
    >
      {errors.map((err, i) => (
        <div key={i} style={{ padding: '10px', display: 'inline-block' }}>
          <pre>{err}</pre>
        </div>
      ))}
      {warnings.map((w, i) => (
        <div key={i} style={{ padding: '10px', display: 'inline-block' }}>
          {w}
        </div>
      ))}
    </div>
  );
}
