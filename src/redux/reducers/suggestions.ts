import * as actionTypes from '../actionTypes';

interface DefaultState {
  relevantProducts: null | any;
  similarProducts: null | any;
}
const defaultState: DefaultState = {
  relevantProducts: null,
  similarProducts: null,
};

export const suggestionsReducer = (state = defaultState, action: any): any => {
  switch (action.type) {
    case actionTypes.GET_RELEVANT_PRODUCTS:
      return {
        ...state,
        relevantProducts: action.payload,
      };

    case actionTypes.GET_SIMILAR_PRODUCTS:
      return {
        ...state,
        similarProducts: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
