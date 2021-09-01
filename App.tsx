/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';
import Test from './src/screens/Test'

const App = (): React.ReactElement => {
  return (
    <>
      <StoreProvider
        store={store}
      >
        <StatusBar />
        <View>
          <Text>
            app.js
          </Text>
          <Test></Test>
        </View>
      </StoreProvider>
    </>
  );
};

export default App;
