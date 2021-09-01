import * as actions from '../actions';
import store from '../store';

export const setLoading = (isLoading: boolean) => {
  store.dispatch(actions.ui.setLoading(isLoading));
};
