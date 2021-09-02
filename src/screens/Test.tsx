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
  Text,
  View,
  Button,
} from 'react-native';
import { useSelector, useDispatch, useStore } from 'react-redux';
import * as functions from '../redux/functions';

const App = (): React.ReactElement => {
  const store = useStore();
  console.log('store', store);

  const ui = useSelector((state) => { return state.ui; });
  console.log('ui', ui);
  

  return (
    <>
      <View>
        <Text>
          app.js
        </Text>
        <Button
          title="log store"
          onPress={() => {
            console.log(store);
            console.log(ui);
          }}
        />
        <Button
          title="true"
          onPress={() => {
            functions.ui.setLoading(true);
          }}
        />
        <Button
          title="false"
          onPress={() => {
            functions.ui.setLoading(false);
          }}
        />
        {ui.isLoading ? (
          <Text>true</Text>
        ) : (
          <Text>false</Text>
        )}
      </View>
    </>
  );
};

export default App;
