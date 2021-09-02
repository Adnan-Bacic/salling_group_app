import { combineReducers } from 'redux';
import * as reducers from './reducers';
import * as types from './types';

const appReducer = combineReducers({
  ui: reducers.uiReducer,
});

// redux co-creator recommends doing this to clear redux state
// https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (state, action) => {
  if (action.type === types.CLEAR_STORE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
