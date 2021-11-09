import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';

const FoodWasteStack = createNativeStackNavigator();

const FoodWasteNavigator = (): React.ReactElement => {
  return (
    <FoodWasteStack.Navigator>
      <FoodWasteStack.Screen
        name="FoodWaste"
        component={Screens.FoodWaste}
      />
      <FoodWasteStack.Screen
        name="FoodWasteStore"
        component={Screens.FoodWasteStore}
      />
    </FoodWasteStack.Navigator>
  );
};

export default FoodWasteNavigator;
