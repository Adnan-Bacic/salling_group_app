import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';

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
