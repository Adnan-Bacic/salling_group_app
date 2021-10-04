import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { API_URL, API_TOKEN } from 'react-native-dotenv';
import { Spinner } from '../components';
import * as functions from '../redux/functions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Stack1 = ({ navigation }): React.ReactElement => {
  const dispatch = useAppDispatch();
  const ui = useAppSelector((state) => { return state.ui; });

  return <Spinner />;
  return (
    <>
      <View>
        <Text>
          rn env
        </Text>
        <Text>
          {API_URL}
        </Text>
        <Text>
          {API_TOKEN}
        </Text>
        <Text>
          rn config
        </Text>
        <Text>
          stack 1
        </Text>
        <Button
          title="nav"
          onPress={() => {
            navigation.navigate('Stack2');
          }}
        />
        <Button
          title="true"
          onPress={() => {
            dispatch(functions.ui.setLoading(true));
          }}
        />
        <Button
          title="false"
          onPress={() => {
            dispatch(functions.ui.setLoading(false));
          }}
        />
        {ui.isLoading ? (
          <Text>
            true
          </Text>
        ) : (
          <Text>
            false
          </Text>
        )}
        <Paper.Button
          onPress={() => {
            console.log('paper');
          }}
        >
          material button
        </Paper.Button>
        <Paper.Button
          mode="outlined"
          onPress={() => {
            console.log('paper');
          }}
        >
          material button
        </Paper.Button>
        <Paper.Button
          mode="contained"
          onPress={() => {
            console.log('paper');
          }}
        >
          material button
        </Paper.Button>
      </View>
    </>
  );
};

export default Stack1;
