import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { NoResults, Spinner } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { MainTemplate } from 'src/templates';
import { suggestionsSelector, uiSelector } from 'src/redux/selectors';
import * as functions from 'src/redux/functions';
import { ProductSuggestionItem, SuggestionsActionContent } from './components';

interface SimilarProductsInterface {
  route:{
    params:{
      id: string
    }
  }
}
const SimilarProducts: React.FunctionComponent<SimilarProductsInterface> = ({
  navigation, route,
}): React.ReactElement => {
  const { id } = route.params;

  const [isLoading, setIsloading] = useState(false);

  const ui = useAppSelector(uiSelector);
  const suggestions = useAppSelector(suggestionsSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getItems = async () => {
      setIsloading(true);

      await dispatch(functions.suggestions.getSimilarProducts(id));

      setIsloading(false);
    };

    getItems();
  }, [dispatch, id]);

  const renderItem = ({ item }: any) => {
    return (
      <ProductSuggestionItem
        actionContent={(
          <SuggestionsActionContent
            item1={item}
            navigation={navigation}
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

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <MainTemplate>
      <FlatList
        data={suggestions.similarProducts}
        renderItem={renderItem}
        ListEmptyComponent={<NoResults />}
      />
    </MainTemplate>
  );
};

export default SimilarProducts;
