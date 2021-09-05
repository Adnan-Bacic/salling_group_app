import * as actions from '../actions';

export const setLoading = (isLoading: boolean) => {
  return (dispatch, getState) => {
    console.log(getState());
    dispatch(actions.ui.setLoading(isLoading));
  };
};
