import { API_URL, API_TOKEN } from '@env';
import { Alert } from 'react-native';
import { requests } from 'src/helpers';
import * as actions from '../actions';

export const getRelevantProducts = (query: any) => {
  return async (dispatch: any) => {
    /*
          #1
      if the search query doesnt return any items, the server throws a 500 error
      so dispatch empty array to show we have no results
      */
    try {
      dispatch(actions.ui.setLoading(true));

      const url = `${API_URL}/v1-beta/product-suggestions/relevant-products?query=${query}`;

      const res: any = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          const d = requests.requestBlockDuration(res.headers.map['retry-after']);

          throw new Error(`Too many requests in a short amount of time. Wait ${d.getMinutes()} minutes and try again`);
        }

        // see #1 - not an error that there are no search results, so we dont want to alert
        // todo: handle quota limit error, should be shown. mail sent asking
        // throw new Error('Could not get products');
      }

      if (!data.suggestions) {
        dispatch(actions.suggestions.getRelevantProducts([]));
        return;
      }

      dispatch(actions.suggestions.getRelevantProducts(data));
    } catch (err: any) {
      Alert.alert(err.name, err.message);
    } finally {
      dispatch(actions.ui.setLoading(false));
    }
  };
};
