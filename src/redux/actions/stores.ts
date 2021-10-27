import * as actionTypes from '../actionTypes';
import { DispatchProps } from '../types';

export const getStores = (storeData: boolean): DispatchProps<any> => {
  return {
    type: actionTypes.GET_STORES,
    payload: storeData,
  };
};
