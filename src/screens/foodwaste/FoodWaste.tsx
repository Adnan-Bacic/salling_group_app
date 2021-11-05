import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { MainTemplate } from 'src/templates';
import * as functions from '../../redux/functions';

const FoodWaste = ({ navigation }): React.ReactElement => {
  const [zip, setZip] = useState('');

  const getData = async () => {
    await functions.foodWaste.getFoodWasteByZip(zip);
  };
  return (
    <MainTemplate>
      <Paper.Title>
        Search zip
      </Paper.Title>
      <Paper.TextInput
        label="zip"
        value={zip}
        onChangeText={(text) => { return setZip(text); }}
        mode="outlined"
        keyboardType="number-pad"
      />
      <Paper.Button
        onPress={async () => {
          await functions.foodWaste.getFoodWasteByZip(zip)
        }}
      >
        search
      </Paper.Button>
    </MainTemplate>
  );
};

export default FoodWaste;
