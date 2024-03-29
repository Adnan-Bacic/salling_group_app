import { AnyAction, combineReducers } from 'redux';
import * as reducers from './reducers';
import * as actionTypes from './actionTypes';

const appReducer = combineReducers({
  stores: reducers.storesReducer,
  foodWaste: reducers.foodWasteReducer,
  suggestions: reducers.suggestionsReducer,
});

// redux co-creator recommends doing this to clear redux state
// https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: AnyAction,
) => {
  if (action.type === actionTypes.CLEAR_STORE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
