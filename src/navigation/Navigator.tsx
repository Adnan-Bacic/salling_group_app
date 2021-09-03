import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import BottomNavigator from './BottomNavigator';
import { RootNavigation } from '../services'
import * as Screens from '../screens'


const Navigator = () => {
  return (
    <NavigationContainer ref={RootNavigation.navigationRef}>
      <BottomNavigator></BottomNavigator>
    </NavigationContainer>
  );
}

export default Navigator;