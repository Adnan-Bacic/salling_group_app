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
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './src/redux/store';
import Navigator from './src/navigation/Navigator';

const App = (): React.ReactElement => {
  return (
    <>
      <StoreProvider
        store={store}
      >
        <SafeAreaView
          style={styles.safeAreaView}
        >
          <StatusBar />
          <PaperProvider>
            <Navigator />
          </PaperProvider>
        </SafeAreaView>
      </StoreProvider>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
