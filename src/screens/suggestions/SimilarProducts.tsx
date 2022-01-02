import React from 'react';
import { FlatList } from 'react-native';
import * as Paper from 'react-native-paper';
import { NoResults, Spinner } from 'src/components';
import { useAppDispatch } from 'src/redux/hooks';
import { MainTemplate } from 'src/templates';
import * as functions from 'src/redux/functions';
import { useSelector } from 'react-redux';
import { uiSelector } from 'src/redux/selectors';
import { ProductSuggestionItem } from './components';

interface SimilarProductsInterface {
  route:{
    params:{
      items: any
    }
  }
}
const SimilarProducts: React.FunctionComponent<SimilarProductsInterface> = ({
  route,
}): React.ReactElement => {
  const { items } = route.params;

  const dispatch = useAppDispatch();

  const ui = useSelector(uiSelector);

  const renderItem = ({ item }: any) => {
    const ActionContent: React.FunctionComponent<any> = ({
      item1,
    }): React.ReactElement => {
      return (
        <Paper.Button
          onPress={() => {
            dispatch(functions.suggestions.getSimilarProducts(item1.prod_id));
          }}
        >
          similar products
        </Paper.Button>
      );
    };
    return (
      <ProductSuggestionItem
        actionContent={(
          <ActionContent
            item1={item}
          />
        )}
        title={item.title}
        image={item.img}
        price={item.price}
      >
        children
      </ProductSuggestionItem>
    );
  };

  if (ui.isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <MainTemplate>
      <FlatList
        data={items}
        renderItem={renderItem}
        ListEmptyComponent={NoResults}
      />
    </MainTemplate>
  );
};

export default SimilarProducts;
