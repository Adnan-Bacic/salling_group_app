import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const Tab1 = ({ navigation }): React.ReactElement => {
  return (
    <>
      <View>
        <Text>tab 1</Text>
        <Button
          title="nav"
          onPress={() => {
            navigation.navigate('Tab2');
          }}
        />
      </View>
    </>
  );
};

export default Tab1;
