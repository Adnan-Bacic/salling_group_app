import { API_URL, API_TOKEN } from 'react-native-dotenv';
import { Alert } from 'react-native';
import * as actions from '../actions';
import { DispatchProps } from '../types';

export const getRelevantProducts = (query) => {
  return async (dispatch, getState) => {
    dispatch(actions.ui.setLoading(true));

    try {
      // todo: validatio
      const url = `${API_URL}/v1-beta/product-suggestions/relevant-products?query=${query}`;

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error('Could not get products');
      }

      dispatch(actions.suggestions.getRelevantProducts(data));
    } catch (err) {
      console.log(err);
    }
    dispatch(actions.ui.setLoading(false));
  };
};
