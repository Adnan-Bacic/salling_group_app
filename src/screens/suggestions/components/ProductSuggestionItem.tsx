import React from 'react';
import * as Paper from 'react-native-paper';
import { FoodItemTemplate, FoodItemBaseInterface } from 'src/components';

interface ProductSuggestionItemInterface extends FoodItemBaseInterface {
  children: any;
  price: number;
}
const ProductSuggestionItem: React.FunctionComponent<ProductSuggestionItemInterface> = ({
  children,
  actionContent,
  title,
  image,
  price,
}): React.ReactElement => {
  return (
    <FoodItemTemplate
      title={title}
      image={image}
      actionContent={actionContent}
    >
      <Paper.Text>
        {children}
      </Paper.Text>
      <Paper.Text>
        {`price: ${price}`}
      </Paper.Text>
    </FoodItemTemplate>
  );
};

export default ProductSuggestionItem;
