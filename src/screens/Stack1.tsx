import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const Stack1 = ({ navigation }): React.ReactElement => {

  return (
    <>
      <View>
      <Text>stack 1</Text>
      <Button title="nav" onPress={() => {
        navigation.navigate('Stack2')
      }}></Button>
      </View>
    </>
  );
};

export default Stack1;
