import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './BottomNavigator';
import { RootNavigation } from '../services';

const Navigator: React.FunctionComponent = (): React.ReactElement => {
  return (
    <NavigationContainer
      ref={RootNavigation.navigationRef}
    >
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
