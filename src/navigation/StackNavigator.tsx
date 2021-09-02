import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Test" component={Screens.Test} />
        <Stack.Screen name="Test2" component={Screens.Test2} />
      </Stack.Navigator>
  );
}

export default StackNavigator;