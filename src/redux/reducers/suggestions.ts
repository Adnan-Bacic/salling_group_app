import { SuggestionsInterface } from 'src/types2/states';
import * as actionTypes from '../actionTypes';

interface DefaultState {
  relevantProducts: null | Pick<SuggestionsInterface, 'relevantProducts'>;
  similarProducts: null | Pick<SuggestionsInterface, 'similarProducts'>;
  frequentlyBoughtTogehter: null | Pick<SuggestionsInterface, 'frequentlyBoughtTogehter'>;
}

const defaultState: DefaultState = {
  relevantProducts: null,
  similarProducts: null,
  frequentlyBoughtTogehter: null,
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

    case actionTypes.GET_FREQUENTLY_BOUGHT_TOGEHTER:
      return {
        ...state,
        frequentlyBoughtTogehter: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
