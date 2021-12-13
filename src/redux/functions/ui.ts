import * as actions from '../actions';

export const setLoading = (isLoading: boolean) => {
  return (dispatch: any): void => {
    dispatch(actions.ui.setLoading(isLoading));
  };
};
