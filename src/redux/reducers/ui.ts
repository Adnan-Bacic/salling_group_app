import * as types from '../types';

const defaultState = {
  isLoading: null,
};

export const uiReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case types.SET_LOADING:
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
