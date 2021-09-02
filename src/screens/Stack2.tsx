import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const Stack2 = ({ navigation }): React.ReactElement => {

  return (
    <>
      <View>
      <Text>stack 2</Text>
      <Button title="nav" onPress={() => {
        navigation.navigate('Tab1')
      }}></Button>
      </View>
    </>
  );
};

export default Stack2;
