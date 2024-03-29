import { createNavigationContainerRef, StackActions, CommonActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>();

export const navigate = (name: string, params?: Record<string, unknown>): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const push = (screenName: string, params?: any): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.push(screenName, params),
    );
  }
};

export const navigateAndResetStack = (screenName: string): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: screenName },
        ],
      }),
    );
  }
};

export const resetStack = (): void => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.popToTop(),
    );
  }
};
