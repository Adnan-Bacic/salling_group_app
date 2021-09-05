import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { useDispatch } from 'react-redux'
import * as functions from '../redux/functions'

const Stack1 = ({ navigation }): React.ReactElement => {
  const dispatch = useDispatch()
  return (
    <>
      <View>
      <Text>stack 1</Text>
      <Button title="nav" onPress={() => {
        navigation.navigate('Stack2')
      }}></Button>
      <Button title="redux" onPress={() => {
        dispatch(functions.ui.setLoading(true))
      }}></Button>
      </View>
    </>
  );
};

export default Stack1;
