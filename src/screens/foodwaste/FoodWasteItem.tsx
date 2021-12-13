import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { FoodItemTemplate } from 'src/components';
import { FoodItemBaseInterface } from 'src/components/food/FoodItemTemplate';

interface FoodWasteItemInterface extends FoodItemBaseInterface {
  children: any;
  originalPrice: number;
  newPrice: number;
  percentDiscount: number
  stock: number;
  discount: number;
  currency: string;
  stockUnit: 'kg' | 'each';
}
const FoodWasteItem: React.FunctionComponent<FoodWasteItemInterface> = ({
  title,
  image,
  originalPrice,
  newPrice,
  percentDiscount,
  stock,
  discount,
  currency,
  stockUnit,
}): React.ReactElement => {
  return (
    <FoodItemTemplate
      title={title}
      image={image}
    >
      <Paper.Text>
        children
      </Paper.Text>
      <Paper.Subheading>
        Info
      </Paper.Subheading>
      <Paper.Text>
        {`original price: ${originalPrice} ${currency}`}
      </Paper.Text>
      <Paper.Text>
        {`new price: ${newPrice} ${currency}`}
      </Paper.Text>
      <Paper.Text>
        {`percent discount ${percentDiscount}%`}
      </Paper.Text>
      <Paper.Text>
        {`stock: ${stock} ${stockUnit === 'kg' ? 'kg' : 'each'}`}
      </Paper.Text>
      <Paper.Text>
        {`discount ${discount} ${currency}`}
      </Paper.Text>
    </FoodItemTemplate>
  );
};

const styles = StyleSheet.create({

});

export default FoodWasteItem;
