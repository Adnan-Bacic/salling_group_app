import * as types from '../types';

export const setLoading = (isLoading) => {
  return {
    type: types.SET_LOADING,
    payload: isLoading,
  };
};
