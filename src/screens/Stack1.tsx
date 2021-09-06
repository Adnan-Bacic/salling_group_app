import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import * as functions from '../redux/functions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Stack1 = ({ navigation }): React.ReactElement => {
  const dispatch = useAppDispatch();
  const ui = useAppSelector((state) => { return state.ui; });
  console.log('ui', ui);

  return (
    <>
      <View>
        <Text>stack 1</Text>
        <Button
          title="nav"
          onPress={() => {
            navigation.navigate('Stack2');
          }}
        />
        <Button
          title="redux"
          onPress={() => {
            dispatch(functions.ui.setLoading(true));
          }}
        />
      </View>
    </>
  );
};

export default Stack1;
