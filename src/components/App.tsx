import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './MapRenderer';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search Map Data</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
