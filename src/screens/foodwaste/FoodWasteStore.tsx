import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const FoodWasteStore = ({ navigation }): React.ReactElement => {
  return (
    <>
      <View>
        <Text>
          food waste store
        </Text>
        <Button
          title="nav"
          onPress={() => {
            console.log(1);
          }}
        />
      </View>
    </>
  );
};

export default FoodWasteStore;
