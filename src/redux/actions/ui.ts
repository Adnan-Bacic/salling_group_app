import * as types from '../types';

export const setLoading = (isLoading: boolean) => {
  return {
    type: types.SET_LOADING,
    payload: isLoading,
  };
};
