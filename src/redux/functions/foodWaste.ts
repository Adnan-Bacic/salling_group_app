import { API_URL, API_TOKEN } from '@env';
import { Alert } from 'react-native';
import * as actions from '../actions';
import { DispatchProps } from '../types';

export const getFoodWasteByZip = (zip) => {
  return async (dispatch, getState) => {
    dispatch(actions.ui.setLoading(true));

    try {
      // todo: validation for zip length
      const url = `${API_URL}/v1/food-waste/?zip=${zip}`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error('Could not get stores');
      }

      dispatch(actions.foodWaste.getFoodWasteByZip(data));
    } catch (err) {
      console.log(err);
    }
    dispatch(actions.ui.setLoading(false));
  };
};
