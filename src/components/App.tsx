import { Provider } from 'react-redux';
import { store } from '../state';
import MapRenderer from './MapRenderer';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search Map Data</h1>
        <MapRenderer />
      </div>
    </Provider>
  );
};

export default App;
