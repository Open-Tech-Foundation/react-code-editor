import { Dispatch, useEffect, useRef } from 'react';
import type { EditorState } from './types';

interface Props {
  state: EditorState;
  setState: Dispatch<EditorState>;
}

export default function Problems({ state, setState }: Props) {
  const problemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (problemsRef.current !== null) {
      problemsRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={problemsRef}
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
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.code === 'Escape') {
          e.stopPropagation();
          setState({ ...state, showProblems: false });
        }
      }}
    >
      {state.errors.map((err, i) => (
        <div key={i} style={{ padding: '10px', display: 'inline-block' }}>
          <pre>{err}</pre>
        </div>
      ))}
      {state.warnings.map((w, i) => (
        <div key={i} style={{ padding: '10px', display: 'inline-block' }}>
          {w}
        </div>
      ))}
    </div>
  );
}
