import React from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';
import {MainTemplate} from 'src/templates'
import FoodWasteItem from './FoodWasteItem';

const FoodWasteStore = ({ navigation, route }): React.ReactElement => {
  const { items } = route.params
  //console.log(items)

  const renderFoodItem = ({ item }) => {
    console.log('item stock', item.offer.stock)
    return(
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
        ></FoodWasteItem>
    )
  }
  return (
    <MainTemplate>
    <>
                    <View
            style={styles.spacer}
          />
      <FlatList
      data={items}
      renderItem={renderFoodItem}
      ></FlatList>
    </>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  spacer: {
    marginTop: 20,
  },
});

export default FoodWasteStore;
