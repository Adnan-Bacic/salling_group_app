import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { MainTemplate } from 'src/templates';
import * as functions from 'src/redux/functions';
import { foodWasteSelector, uiSelector } from 'src/redux/selectors';
import { NoResults, Spinner } from 'src/components';

const FoodWaste = ({ navigation }): React.ReactElement => {
  const [zip, setZip] = useState('');

  const dispatch = useAppDispatch();
  const foodWaste = useAppSelector(foodWasteSelector)
  console.log('fw', foodWaste)
  const ui = useAppSelector(uiSelector)


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
          await dispatch(functions.foodWaste.getFoodWasteByZip(zip))
        }}
      >
        search
      </Paper.Button>

      <View>
        {(foodWaste.foodItems && !ui.isLoading) && (
          foodWaste.foodItems.map((item) => {
            console.log('item', item)
            return(
              <Paper.Text>1</Paper.Text>
            )
          })
        )}
      </View>

      {(foodWaste.foodItems && !ui.isLoading) && (
            <>
              {(foodWaste.foodItems.length === 0) && (
              <NoResults></NoResults>
              )}
            </>
          )}
        
      {ui.isLoading && (
        <Spinner></Spinner>
      )}

    </MainTemplate>
  );
};

export default FoodWaste;
