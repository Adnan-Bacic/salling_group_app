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
const FoodWasteItem = ({ title, image }): React.ReactElement => {
  return (
    <FoodItemTemplate
    title={title}
    image={image}
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
