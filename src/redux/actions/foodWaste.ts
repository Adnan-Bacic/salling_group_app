import * as actionTypes from '../actionTypes';
import { DispatchProps } from '../types';

export const getFoodWasteByZip = (data: any): DispatchProps<any> => {
  return {
    type: actionTypes.GET_FOOD_WASTE_ZIP,
    payload: data,
  };
};

export const getFoodWasteById = (data: any): DispatchProps<any> => {
  return {
    type: actionTypes.GET_FOOD_WASTE_ID,
    payload: data,
  };
};
