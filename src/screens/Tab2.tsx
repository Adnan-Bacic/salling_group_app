import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const Tab2 = ({ navigation }): React.ReactElement => {
  return (
    <>
      <View>
        <Text>tab 2</Text>
        <Button
          title="nav"
          onPress={() => {
            navigation.navigate('Stack1');
          }}
        />
      </View>
    </>
  );
};

export default Tab2;
