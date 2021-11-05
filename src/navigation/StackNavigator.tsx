import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';

const Stack1 = createNativeStackNavigator();

export const FoodWasteNavigator = (): React.ReactElement => {
  return (
    <Stack1.Navigator>
      <Stack1.Screen
        name="FoodWaste"
        component={Screens.FoodWaste}
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
      <StoresStack.Screen
        name="Store"
        component={Screens.Store}
      />
    </StoresStack.Navigator>
  );
};
