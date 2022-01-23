import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import axios from 'axios';
import { resourceLimits } from 'worker_threads';

export const searchMapData = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_MAP_DATA,
    });

    try {
      const { data } = await axios.get(
        'https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/NOAA_Storm_Events_Database_view/FeatureServer/0/query',
        {
          params: {
            where: term,
            f: 'geojson',
            outFields: 'EVENT_TYPE',
          },
        }
      );

      // const data = await queryFeatures({
      //   url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3',
      //   where: "STATE_NAME = 'Alaska'",
      //   f: 'geojson',
      // });

      console.log(data);

      const coordinates = data.features.map((result: any) => {
        if (result.geometry !== null) {
          return result.geometry.coordinates;
        }
      });

      dispatch({
        type: ActionType.SEARCH_MAP_DATA_SUCCESS,
        payload: coordinates,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_MAP_DATA_ERROR,
        payload: err.message,
      });
    }
  };
};
