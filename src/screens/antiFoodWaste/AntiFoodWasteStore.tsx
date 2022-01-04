import React from 'react';
import {
  FlatList,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { MainTemplate } from 'src/templates';
import { NoResults } from 'src/components';
import { FoodWasteItem } from './components';

interface FoodWasteInterface {
  route: {
    params: {
      items: any;
    }
  }
}
const AntiFoodWasteStore: React.FunctionComponent<FoodWasteInterface> = ({
  route,
}): React.ReactElement => {
  const { items } = route.params;

  const renderFoodItem = ({ item }: any) => {
    const ActionContent: React.FunctionComponent = (): React.ReactElement => {
      return (
        <Paper.Button
          onPress={() => {
            console.log('todo');
          }}
        >
          todo
        </Paper.Button>
      );
    };
    return (
      <FoodWasteItem
        title={item.product.description}
        image={item.product.image}
        originalPrice={item.offer.originalPrice}
        newPrice={item.offer.newPrice}
        percentDiscount={item.offer.percentDiscount}
        stock={item.offer.stock}
        discount={item.offer.discount}
        currency={item.offer.currency}
        stockUnit={item.offer.stockUnit}
        actionContent={<ActionContent />}
      >
        children
      </FoodWasteItem>
    );
  };

  return (
    <MainTemplate>
      <FlatList
        data={items.clearances}
        renderItem={renderFoodItem}
        ListEmptyComponent={NoResults}
      />
    </MainTemplate>
  );
};

export default AntiFoodWasteStore;
