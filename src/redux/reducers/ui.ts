import * as actionTypes from '../actionTypes';

interface DefaultState {
  isLoading: null | boolean
}
const defaultState: DefaultState = {
  isLoading: null,
};

export const uiReducer = (state = defaultState, action: any): any => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
