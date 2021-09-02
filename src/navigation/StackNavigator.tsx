import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens'
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Stack1" component={Screens.Stack1} />
        <Stack.Screen name="Stack2" component={Screens.Stack2} />
      </Stack.Navigator>
  );
}

export default StackNavigator;