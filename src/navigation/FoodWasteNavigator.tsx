import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';

const FoodWasteStack = createNativeStackNavigator();

const FoodWasteNavigator: React.FunctionComponent = (): React.ReactElement => {
  return (
    <FoodWasteStack.Navigator>
      <FoodWasteStack.Screen
        name="AntiFoodWasteZip"
        component={Screens.AntiFoodWasteZip}
      />
      <FoodWasteStack.Screen
        name="AntiFoodWasteStore"
        component={Screens.AntiFoodWasteStore}
      />
    </FoodWasteStack.Navigator>
  );
};

export default FoodWasteNavigator;
