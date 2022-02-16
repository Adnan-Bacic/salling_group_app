import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';

const SuggestionsStack = createNativeStackNavigator();

const AntiFoodWasteNavigator: React.FunctionComponent = (): React.ReactElement => {
  return (
    <SuggestionsStack.Navigator>
      <SuggestionsStack.Screen
        name="RelevantProducts"
        component={Screens.RelevantProducts}
      />
      <SuggestionsStack.Screen
        name="SimilarProducts"
        component={Screens.SimilarProducts}
      />
      <SuggestionsStack.Screen
        name="FrequentlyBoughtTogehter"
        component={Screens.FrequentlyBoughtTogehter}
      />
    </SuggestionsStack.Navigator>
  );
};

export default AntiFoodWasteNavigator;
