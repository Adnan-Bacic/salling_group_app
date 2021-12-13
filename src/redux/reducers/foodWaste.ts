import * as actionTypes from '../actionTypes';

interface DefaultState {
  foodItems: null | any
}
const defaultState: DefaultState = {
  foodItems: null,
};

export const foodWasteReducer = (state = defaultState, action: any): any => {
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
