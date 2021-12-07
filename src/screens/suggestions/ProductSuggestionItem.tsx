import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { FoodItemTemplate } from 'src/components';
import { FoodItemBaseInterface } from 'src/components/food/FoodItemTemplate';

interface ProductSuggestionItemInterface extends FoodItemBaseInterface {
  children: React.ReactElement;
  price: number;
  link: string;
  onPressLink: () => void;
}
const ProductSuggestionItem: React.FunctionComponent<ProductSuggestionItemInterface> = ({
  title,
  image,
  price,
  link,
  onPressLink,
}): React.ReactElement => {
  return (
    <FoodItemTemplate
      title={title}
      image={image}
    >
      <Paper.Text>
        children
      </Paper.Text>
      <Paper.Text>
        {price}
      </Paper.Text>
      <Paper.Text
        onPress={onPressLink}
      >
        {link}
      </Paper.Text>
    </FoodItemTemplate>
  );
};

const styles = StyleSheet.create({

});

export default ProductSuggestionItem;
