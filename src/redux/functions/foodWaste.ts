import { API_URL, API_TOKEN } from '@env';
import { Alert } from 'react-native';
import { requests } from 'src/helpers';
import * as actions from '../actions';

export const getFoodWasteByZip = (zip: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(actions.ui.setLoading(true));

      const url = `${API_URL}/v1/food-waste/?zip=${zip}`;

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

        throw new Error('Could not get food data');
      }

      dispatch(actions.foodWaste.getFoodWasteByZip(data));
    } catch (err: any) {
      Alert.alert(err.name, err.message);
    } finally {
      dispatch(actions.ui.setLoading(false));
    }
  };
};
