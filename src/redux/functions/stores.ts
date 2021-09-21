/* eslint-disable arrow-body-style */
import { API_URL, API_TOKEN } from 'react-native-dotenv';
import { Alert } from 'react-native';
import * as actions from '../actions';
import { DispatchProps } from '../types';

// eslint-disable-next-line max-len
export const getStores = (babyChanging: any, bakery: any, carlsJunior: any) => async (dispatch: (p: DispatchProps<any>) => void, getState: () => void): Promise<void> => {
    dispatch(actions.ui.setLoading(true));
  
  try {
    let paramString = ''
    if(babyChanging === true){
      paramString += 'babyChanging=true';
    }
    if(bakery === true){
      paramString += '&bakery=true';
    }
    if(carlsJunior === true){
      paramString += '&carlsJunior=true';
    }
    console.log('ps', paramString)

    console.log('params', babyChanging, bakery, carlsJunior)
    const url = `${API_URL}/v2/stores?${paramString}`;
    console.log('url', url)
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
    console.log('data', data)
    console.log('getstate', getState().stores.storesData)
  } catch (err) {
    Alert.alert(err.name, err.message);
  }
setTimeout(() => {
  dispatch(actions.ui.setLoading(false));

}, 1000);};
