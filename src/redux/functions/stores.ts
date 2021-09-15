/* eslint-disable arrow-body-style */
import { API_URL, API_TOKEN } from 'react-native-dotenv';
import { Alert } from 'react-native';
import * as actions from '../actions';
import { DispatchProps } from '../types';

// eslint-disable-next-line max-len
export const getStores = (babyChanging: any, bakery: any, carlsJunior: any) => async (dispatch: (p: DispatchProps<any>) => void, getState: () => void): Promise<void> => {
  if (getState().ui.isLoading === null) {
    dispatch(actions.ui.setLoading(true));
  }
  try {
    const url = `${API_URL}/v2/stores?babyChanging=${babyChanging}&bakery=${bakery}&carlsJunior=${carlsJunior}`;
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

    dispatch(actions.stores.getStores(data));
  } catch (err) {
    Alert.alert(err.name, err.message);
  }
  dispatch(actions.ui.setLoading(false));
};
