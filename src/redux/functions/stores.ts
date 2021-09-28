import { API_URL, API_TOKEN } from 'react-native-dotenv';
import { Alert } from 'react-native';
import * as actions from '../actions';
import { DispatchProps } from '../types';

interface Options {
  babyChanging: boolean;
}
export const getStores = (options: Options) => async (dispatch: (p: DispatchProps<any>) => void, getState: () => void): Promise<void> => {
  console.log(options)
  dispatch(actions.ui.setLoading(true));

  try {
    
    let query = ''
    if(options.babyChanging === true){
      query += 'babyChanging=true&';
    }
    if(options.bakery === true){
      query += 'bakery=true&';
    }
    if(options.carlsJunior === true){
      query += 'carlsJunior=true&';
    }
    if(options.enablingFacilities === true){
      query += 'enablingFacilities=true&';
    }
    if(options.flowers === true){
      query += 'flowers=true&';
    }
    if(options.garden === true){
      query += 'garden=true&';
    }
    if(options.holidayOpen === true){
      query += 'holidayOpen=true&';
    }
    if(options.nonFood === true){
      query += 'nonFood=true&';
    }
    if(options.open247 === true){
      query += 'open247=true&';
    }
    if(options.parking === true){
      query += 'parking=true&';
    }
    //reverse
    if(options.noParkingRestrictions === true){
      query += 'parkingRestrictions=false&';
    }
    if(options.petFood === true){
      query += 'petFood=true&';
    }
    if(options.pharmacy === true){
      query += 'pharmacy=true&';
    }
    if(options.scanAndGo === true){
      query += 'scanAndGo=true&';
    }
    if(options.starbucks === true){
      query += 'starbucks=true&';
    }
    if(options.swipBox === true){
      query += 'swipBox=true&';
    }
    if(options.wc === true){
      query += 'wc=true&';
    }
    if(options.wifi === true){
      query += 'wifi=true&';
    }


   console.log('query', query)

    const url = `${API_URL}/v2/stores?${query}`;
    //const url = `${API_URL}/v2/stores?zip=${zip}&babyChanging=${babyChanging}&bakery=${bakery}&carlsJunior=${carlsJunior}`;
    console.log('url', url);
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
  setTimeout(() => {
    dispatch(actions.ui.setLoading(false));
  }, 0);
};
