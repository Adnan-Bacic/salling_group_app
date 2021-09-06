import * as actionTypes from '../actionTypes';
import { DispatchProps } from '../types';

export const setLoading = (isLoading: boolean): DispatchProps<boolean> => {
  return {
    type: actionTypes.SET_LOADING,
    payload: isLoading,
  };
};
