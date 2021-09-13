/* eslint-disable arrow-body-style */
import * as actions from '../actions';
import { DispatchProps } from '../types';
import { API_URL, API_TOKEN } from 'react-native-dotenv';
import { Alert } from 'react-native';

// eslint-disable-next-line max-len
export const getStores = (storeData: any) => async (dispatch: (p: DispatchProps<any>) => void, getState: () => void): void => {
  dispatch(actions.ui.setLoading(true))
  try {
    const url = `${API_URL}/v2/stores`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      },
    })

    const data = await res.json()

    console.log('res', res)
    console.log('data', data)

    if(!res.ok){
      throw new Error('Could not get stores')
    }

    dispatch(actions.stores.getStores(data))
  } catch (err) {
    Alert.alert(err.name, err.message)
  }
  dispatch(actions.ui.setLoading(false))
};
