import { API_URL, API_TOKEN } from '@env';
import { Alert } from 'react-native';
import { requests } from 'src/helpers';
import { RootNavigation } from 'src/services';
import * as actions from '../actions';

export const getFoodWasteByZip = (zip: string) => {
  return async (dispatch: any) => {
    try {
      const url = `${API_URL}/v1/food-waste/?zip=${zip}`;

      const res: any = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      if (!res.ok) {
        if (res.status === 429) {
          const d = requests.requestBlockDuration(res.headers.map['retry-after']);

          throw new Error(`Too many requests in a short amount of time. Wait ${d.getMinutes()} minutes and try again`);
        }

        throw new Error('Could not get food data');
      }

      const data = await res.json();

      dispatch(actions.foodWaste.getFoodWasteByZip(data));
    } catch (err: any) {
      Alert.alert(err.name, err.message);
    }
  };
};

export const getFoodWasteById = (id: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      // if user clicks on the same item, no need to make request, show already saved items
      if (id === getState()?.foodWaste?.foodItemsId?.store?.id) {
        RootNavigation.navigate('AntiFoodWasteNavigator', {
          screen: 'AntiFoodWasteStore',
          initial: false,
          params: {
            items: getState().foodWaste.foodItemsId,
          },
        });
        return;
      }

      const url = `${API_URL}/v1/food-waste/${id}`;

      const res: any = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });

      if (!res.ok) {
        if (res.status === 429) {
          const d = requests.requestBlockDuration(res.headers.map['retry-after']);

          throw new Error(`Too many requests in a short amount of time. Wait ${d.getMinutes()} minutes and try again`);
        }

        throw new Error('Could not get food data');
      }

      const data = await res.json();

      dispatch(actions.foodWaste.getFoodWasteById(data));

      RootNavigation.navigate('AntiFoodWasteNavigator', {
        screen: 'AntiFoodWasteStore',
        initial: false,
        params: {
          items: data,
        },
      });
    } catch (err: any) {
      Alert.alert(err.name, err.message);
    }
  };
};
