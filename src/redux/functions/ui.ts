import * as actions from '../actions';
import { DispatchProps } from '../types';

export const setLoading = (isLoading: boolean) => {
  return (dispatch: (p: DispatchProps<boolean>) => void, getState: () => void): void => {
    console.log(getState());
    dispatch(actions.ui.setLoading(isLoading));
  };
};
