import * as actionTypes from '../actionTypes';
import { DispatchProps } from '../types';

interface DefaultState {
  isLoading: null | boolean
}
const defaultState: DefaultState = {
  isLoading: null,
};

export const uiReducer = (state = defaultState, action: DispatchProps<boolean>): any => {
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
