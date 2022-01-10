import React from 'react';
import { FlatList } from 'react-native';
import { NoResults, Spinner } from 'src/components';
import { useAppSelector } from 'src/redux/hooks';
import { MainTemplate } from 'src/templates';
import { uiSelector } from 'src/redux/selectors';
import { ProductSuggestionItem, SuggestionsActionContent } from './components';

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

  const ui = useAppSelector(uiSelector);

  const renderItem = ({ item }: any) => {
    return (
      <ProductSuggestionItem
        actionContent={(
          <SuggestionsActionContent
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
        ListEmptyComponent={<NoResults />}
      />
    </MainTemplate>
  );
};

export default SimilarProducts;
