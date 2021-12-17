import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';

const StoresStack = createNativeStackNavigator();

const StoresNavigator: React.FunctionComponent = (): React.ReactElement => {
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

export default StoresNavigator;
