import { FoodWasteInterface, StoresInterface, SuggestionsInterface } from 'src/types2/states';
import { AppState } from './types';

export const uiSelector = (state: AppState): any => { return state.ui; };
export const storesSelector = (state: AppState): StoresInterface => { return state.stores; };
export const foodWasteSelector = (state: AppState): FoodWasteInterface => {
  return state.foodWaste;
};
export const suggestionsSelector = (state: AppState): SuggestionsInterface => {
  return state.suggestions;
};
