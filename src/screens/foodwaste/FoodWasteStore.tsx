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
    console.log('item', item)
    return(
        <FoodWasteItem
        title={item.product.description}
        image={item.product.image}
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
