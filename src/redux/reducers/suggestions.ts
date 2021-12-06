import * as actionTypes from '../actionTypes';
import { DispatchProps } from '../types';

interface DefaultState {
    relevantProducts: null | any
}
const defaultState: DefaultState = {
  relevantProducts: null,
};

export const suggestionsReducer = (state = defaultState, action: DispatchProps<boolean>): any => {
  switch (action.type) {
    case actionTypes.GET_RELEVANT_PRODUCTS:
      return {
        ...state,
        relevantProducts: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
