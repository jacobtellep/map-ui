import { Provider } from 'react-redux';
import { store } from '../state';
import MapRenderer from './MapRenderer';
import { State } from '../QueryOptions/StateOptions';

const App = () => {
  
  return (
    <Provider store={store}>
      <div>
        <h1>Search Map Data</h1>
        <MapRenderer />
        <select>
          
        </select>
      </div>
    </Provider>
  );
};

export default App;
