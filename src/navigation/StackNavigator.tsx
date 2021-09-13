import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';

const Stack1 = createNativeStackNavigator();

export const StackNavigator1 = (): React.ReactElement => {
  return (
    <Stack1.Navigator>
      <Stack1.Screen
        name="Stack1"
        component={Screens.Stack1}
      />
      <Stack1.Screen
        name="Stack2"
        component={Screens.Stack2}
      />
    </Stack1.Navigator>
  );
};

const Stack2 = createNativeStackNavigator();

export const StackNavigator2 = (): React.ReactElement => {
  return (
    <Stack2.Navigator>
      <Stack2.Screen
        name="Tab1"
        component={Screens.Tab1}
      />
      <Stack2.Screen
        name="Tab2"
        component={Screens.Tab2}
      />
    </Stack2.Navigator>
  );
};

const StoresStack = createNativeStackNavigator();

export const StoresNavigator = (): React.ReactElement => {
  return (
    <StoresStack.Navigator>
      <StoresStack.Screen
        name="Stores"
        component={Screens.Stores}
      />
    </StoresStack.Navigator>
  );
};
