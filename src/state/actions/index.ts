import { ActionType } from '../action-types';

interface SearchMapDataAction {
  type: ActionType.SEARCH_MAP_DATA;
}

interface SearchMapDataSuccessAction {
  type: ActionType.SEARCH_MAP_DATA_SUCCESS;
  payload: string[];
}

interface SearchMapDataErrorAction {
  type: ActionType.SEARCH_MAP_DATA_ERROR;
  payload: string;
}

export type Action =
  | SearchMapDataAction
  | SearchMapDataSuccessAction
  | SearchMapDataErrorAction;
