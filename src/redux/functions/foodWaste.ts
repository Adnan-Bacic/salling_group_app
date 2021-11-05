import { API_URL, API_TOKEN } from 'react-native-dotenv';
import { Alert } from 'react-native';
import * as actions from '../actions';
import { DispatchProps } from '../types';

export const getFoodWasteByZip = (zip) => {
  console.log(zip)
  return async (dispatch, getState) => {
    try {
      console.log(1)
      const url = `${API_URL}/v1/food-waste/?zip=${zip}`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        throw new Error('Could not get stores');
      }

      dispatch(actions.foodWaste.getFoodWasteByZip(data));
    } catch (err) {
      console.log(err);
    }
  };
};
