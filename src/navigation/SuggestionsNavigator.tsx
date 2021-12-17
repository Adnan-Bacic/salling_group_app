import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';

const SuggestionsStack = createNativeStackNavigator();

const FoodWasteNavigator: React.FunctionComponent = (): React.ReactElement => {
  return (
    <SuggestionsStack.Navigator>
      <SuggestionsStack.Screen
        name="RelevantProducts"
        component={Screens.RelevantProducts}
      />
    </SuggestionsStack.Navigator>
  );
};

export default FoodWasteNavigator;
