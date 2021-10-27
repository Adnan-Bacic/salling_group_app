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
        <Text>
          stack 2
        </Text>
        <Button
          title="nav"
          onPress={() => {
            navigation.navigate('StackNavigator2', {
              screen: 'Tab1',
            });
          }}
        />
      </View>
    </>
  );
};

export default Stack2;
