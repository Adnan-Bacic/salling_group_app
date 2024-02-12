import rootReducer from './rootReducer';

export interface DispatchProps<T> {
  type: string;
  payload?: T;
}

export type AppState = ReturnType<typeof rootReducer>;
