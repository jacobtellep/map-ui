import { ActionType } from '../action-types';
import { Action } from '../actions';

interface MapDataState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: MapDataState = initialState,
  action: Action
): MapDataState => {
  switch (action.type) {
    case ActionType.SEARCH_MAP_DATA:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_MAP_DATA_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_MAP_DATA_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
