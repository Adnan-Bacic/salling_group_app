import * as actionTypes from '../actionTypes';
import { DispatchProps } from '../types';

export const getRelevantProducts = (query: any): DispatchProps<any> => {
  return {
    type: actionTypes.GET_RELEVANT_PRODUCTS,
    payload: query,
  };
};

export const getSimilarProducts = (data: any): DispatchProps<any> => {
  return {
    type: actionTypes.GET_SIMILAR_PRODUCTS,
    payload: data,
  };
};
