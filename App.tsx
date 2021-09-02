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
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';
import Test from './src/screens/Test';

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
          <View>
            <Text>
              app.js
            </Text>
            <Test />
          </View>
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
