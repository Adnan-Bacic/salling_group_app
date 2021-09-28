import * as actions from '../actions';
import { DispatchProps } from '../types';

export const setLoading = (isLoading: boolean) => {
  return (dispatch: (p: DispatchProps<boolean>) => void): void => {
    dispatch(actions.ui.setLoading(isLoading));
  };
};
