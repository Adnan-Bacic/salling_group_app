import * as actions from '../actions';

export const setLoading = (isLoading) => {
  return (dispatch, getState) => {
    console.log(dispatch);
    console.log(getState);
    dispatch(actions.ui.setLoading(isLoading));
  };
};
