import * as actionTypes from '../actionTypes';
import { DispatchProps } from '../types';

interface DefaultState {
  storesData: null | any
}
const defaultState: DefaultState = {
  storesData: null,
};

export const storesReducer = (state = defaultState, action: DispatchProps<boolean>): any => {
  switch (action.type) {
    case actionTypes.GET_STORES:
      return {
        ...state,
        storesData: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
