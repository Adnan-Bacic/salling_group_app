import * as actionTypes from '../actionTypes';
import { DispatchProps } from '../types';

interface DefaultState {
  foodItems: null | any
}
const defaultState: DefaultState = {
  foodItems: null,
};

export const foodWasteReducer = (state = defaultState, action: DispatchProps<boolean>): any => {
  switch (action.type) {
    case actionTypes.GET_FOOD_WASTE_ZIP:
      return {
        ...state,
        foodItems: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
