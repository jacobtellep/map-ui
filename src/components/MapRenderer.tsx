import React, { useState, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';
import { States } from '../QueryOptions/StateOptions';

const MapRenderer: React.FC = () => {
  let term: string = '';
  const [state, setState] = useState('');
  const [year, setYear] = useState('');
  const [unselectedError, setUnselectedError] = useState('');
  const { searchMapData: searchMapData } = useActions();
  const { data, error, loading } = useSelector((state) => state.mapData);
  const yearForSelect = new Date().getFullYear() - 1;
  const years = Array.from(
    new Array(73),
    (val, index) => yearForSelect - index
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    term = `STATE='${state}' AND YEAR=${year}`;
    console.log(state);
    console.log(year);
    console.log(term);
    if (state === '' || year === '') {
      setUnselectedError('Please select a STATE and a YEAR value.');
    } else {
      setUnselectedError('');
      searchMapData(term);
    }
  };

  const onStateSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value.trim());
  };

  const onYearSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value.trim());
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <select onChange={onStateSelect}>
          <option></option>
          {Object.values(States).map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
        <select onChange={onYearSelect}>
          <option></option>
          {years.map((year, index) => {
            return (
              <option key={`year${index}`} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        <button>Search</button>
      </form>
      <div>
        {unselectedError && (
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            {unselectedError}
          </span>
        )}
      </div>

      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error &&
        !loading &&
        data.map((coordinate, index) => <div key={index}>{coordinate}</div>)}
      {/* {data} */}
    </div>
  );
};

export default MapRenderer;
