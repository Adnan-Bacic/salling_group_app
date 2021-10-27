import { API_URL, API_TOKEN } from 'react-native-dotenv';
import { Alert } from 'react-native';
import * as actions from '../actions';
import { DispatchProps } from '../types';

interface Options {
  // filters
  zip?: string;
  city?: string;
  country?: string;
  street?: string;
  brand?: string;

  // attributes
  babyChanging?: null | boolean;
  bakery?: null | boolean;
  carlsJunior?: null | boolean;
  enablingFacilities?: null | boolean;
  flowers?: null | boolean;
  garden?: null | boolean;
  holidayOpen?: null | boolean;
  nonFood?: null | boolean;
  open247?: null | boolean;
  parking?: null | boolean;
  parkingRestrictions?: null | boolean;
  petFood?: null | boolean;
  pharmacy?: null | boolean;
  scanAndGo?: null | boolean;
  starbucks?: null | boolean;
  swipBox?: null | boolean;
  wc?: null | boolean;
  wifi?: null | boolean;
}
export const getStores = (options: Options) => {
  return async (dispatch: (p: DispatchProps<any>) => void): Promise<void> => {
    dispatch(actions.ui.setLoading(true));

    try {
      let query = '';

      // filters
      if (options.zip !== '') {
        query += `zip=${options.zip}&`;
      }
      if (options.city !== '') {
        query += `city=${options.city}&`;
      }
      if (options.country !== '') {
        query += `country=${options.country}&`;
      }
      if (options.street !== '') {
        query += `street =${options.street}&`;
      }
      if (options.brand !== '') {
        query += `brand=${options.brand}&`;
      }

      // attributes
      if (options.babyChanging === true) {
        query += 'babyChanging=true&';
      }
      if (options.bakery === true) {
        query += 'bakery=true&';
      }
      if (options.carlsJunior === true) {
        query += 'carlsJunior=true&';
      }
      if (options.enablingFacilities === true) {
        query += 'enablingFacilities=true&';
      }
      if (options.flowers === true) {
        query += 'flowers=true&';
      }
      if (options.garden === true) {
        query += 'garden=true&';
      }
      if (options.holidayOpen === true) {
        query += 'holidayOpen=true&';
      }
      if (options.nonFood === true) {
        query += 'nonFood=true&';
      }
      if (options.open247 === true) {
        query += 'open247=true&';
      }
      if (options.parking === true) {
        query += 'parking=true&';
      }
      // reverse
      if (options.parkingRestrictions === true) {
        query += 'parkingRestrictions=false&';
      }
      if (options.petFood === true) {
        query += 'petFood=true&';
      }
      if (options.pharmacy === true) {
        query += 'pharmacy=true&';
      }
      if (options.scanAndGo === true) {
        query += 'scanAndGo=true&';
      }
      if (options.starbucks === true) {
        query += 'starbucks=true&';
      }
      if (options.swipBox === true) {
        query += 'swipBox=true&';
      }
      if (options.wc === true) {
        query += 'wc=true&';
      }
      if (options.wifi === true) {
        query += 'wifi=true&';
      }

      // remove last char(&)
      query = query.slice(0, -1);

      console.log('query', query);

      const url = `${API_URL}/v2/stores?${query}`;
      console.log(url);

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
    } catch (err: any) {
      Alert.alert(err.name, err.message);
    }

    dispatch(actions.ui.setLoading(false));
  };
};
