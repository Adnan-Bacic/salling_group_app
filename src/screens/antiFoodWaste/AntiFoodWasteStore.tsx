import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { MainTemplate } from 'src/templates';
import { FoodWasteItem } from './components';

interface FoodWasteInterface {
  navigation: any;
  route: {
    params: {
      items: any;
    }
  }
}
const AntiFoodWasteStore: React.FunctionComponent<FoodWasteInterface> = ({
  navigation, route,
}): React.ReactElement => {
  const { items } = route.params;
  // console.log(items)

  const renderFoodItem = ({ item }: any) => {
    // console.log('item stock', item.offer.stock);

    const ActionContent = () => {
      return (
        <Paper.Button
          onPress={() => {
            console.log('antifoodwastestore');
          }}
        >
          123
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
      <>
        <View
          style={styles.spacer}
        />
        <FlatList
          data={items}
          renderItem={renderFoodItem}
        />
      </>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  spacer: {
    marginTop: 20,
  },
});

export default AntiFoodWasteStore;
