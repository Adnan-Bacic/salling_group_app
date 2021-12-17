import { API_URL, API_TOKEN } from '@env';
import * as actions from '../actions';

export const getRelevantProducts = (query: any) => {
  return async (dispatch: any) => {
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

      /*
      if the search query doesnt return any items, the server throws a 500 error
      so dispatch empty array to show we have no results
      */
      if (!data.suggestions) {
        dispatch(actions.suggestions.getRelevantProducts([]));
        throw new Error('Invalid search');
      }

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
