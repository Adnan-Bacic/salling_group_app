import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens'

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Test" component={Screens.Test} />
        <Stack.Screen name="Test2" component={Screens.Test2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;