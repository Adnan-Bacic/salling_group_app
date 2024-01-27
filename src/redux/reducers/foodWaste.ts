import { FoodWasteInterface } from 'src/types2/states';
import * as actionTypes from '../actionTypes';

interface DefaultState {
  foodItems: null | FoodWasteInterface;
  foodItemsId: null | any;
}

const defaultState: DefaultState = {
  foodItems: null,
  foodItemsId: null,
};

export const foodWasteReducer = (state = defaultState, action: any): any => {
  switch (action.type) {
    case actionTypes.GET_FOOD_WASTE_ZIP:
      return {
        ...state,
        foodItems: action.payload,
      };

    case actionTypes.GET_FOOD_WASTE_ID:
      return {
        ...state,
        foodItemsId: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
