import { combineReducers } from 'redux';
import mapDataReducer from './mapDataReducer';

const reducers = combineReducers({
  mapData: mapDataReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
