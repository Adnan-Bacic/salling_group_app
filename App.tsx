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
} from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './src/redux/store';
import Navigator from './src/navigation/Navigator';

const App = (): React.ReactElement => {
  return (
    <StoreProvider
      store={store}
    >
      <PaperProvider>
        <SafeAreaProvider>
          <StatusBar />

          <Navigator />
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
