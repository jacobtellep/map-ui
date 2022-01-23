import { useState, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';
import { useRef } from 'react';

const MapRenderer: React.FC = () => {
  const [term, setTerm] = useState('');
  const [err, setErr] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { searchMapData: searchMapData } = useActions();
  const { data, error, loading } = useSelector((state) => state.mapData);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchMapData(term);
    if (term === '') {
      setErr('Please enter a value');
    } else {
      setErr('');
    }
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
    if (event.target.value === '') {
      setErr('Please enter a value');
    } else {
      setErr('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={onChange} />
        <button>Search</button>
      </form>
      {<span style={{ color: 'red', fontWeight: 'bold' }}>{err}</span>}
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error && !loading && data.map((coordinate, index) => <div key={index}>{coordinate}</div>)}
      {/* {data} */}
    </div>
  );
};

export default MapRenderer;
