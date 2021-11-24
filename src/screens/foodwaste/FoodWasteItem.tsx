import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { FoodItemTemplate } from 'src/components';
import { FoodItemBaseInterface } from 'src/components/food/FoodItemTemplate';

interface StoreItemInterface extends FoodItemBaseInterface {
    children: any;
}
const FoodWasteItem = (): React.ReactElement => {
  return (
    <FoodItemTemplate
    >
      <Paper.Text>
        children
      </Paper.Text>
    </FoodItemTemplate>
  );
};

const styles = StyleSheet.create({

});

export default FoodWasteItem;
