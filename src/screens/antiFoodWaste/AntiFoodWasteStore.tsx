import React, { useEffect, useState } from 'react';
import {
  FlatList,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { MainTemplate } from 'src/templates';
import { NoResults, Spinner } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import * as functions from 'src/redux/functions';
import { foodWasteSelector } from 'src/redux/selectors';
import { FoodWasteItem } from './components';

interface FoodWasteInterface {
  route: {
    params: {
      id: string;
    }
  }
}
const AntiFoodWasteStore: React.FunctionComponent<FoodWasteInterface> = ({
  route,
}): React.ReactElement => {
  const { id } = route.params;

  const dispatch = useAppDispatch();

  const foodWaste = useAppSelector(foodWasteSelector);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);

      await dispatch(functions.foodWaste.getFoodWasteById(id));

      setIsLoading(false);
    };

    getItems();
  }, [dispatch, id]);

  const renderFoodItem = ({ item }: any) => {
    const ActionContent: React.FunctionComponent = (): React.ReactElement => {
      return (
        <Paper.Button>
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

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <MainTemplate>
      <FlatList
        data={foodWaste?.foodItemsId?.clearances}
        renderItem={renderFoodItem}
        ListEmptyComponent={<NoResults />}
      />
    </MainTemplate>
  );
};

export default AntiFoodWasteStore;
