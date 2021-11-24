import React from 'react';
import {
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import FoodWasteItem from './FoodWasteItem';

const FoodWasteStore = ({ navigation, route }): React.ReactElement => {
  const { items } = route.params
  console.log(items)

  const renderFoodItem = ({ item }) => {
    return(
      <FoodWasteItem></FoodWasteItem>
    )
  }
  return (
    <>
      <FlatList
      data={items}
      renderItem={renderFoodItem}
      ></FlatList>
    </>
  );
};

export default FoodWasteStore;
