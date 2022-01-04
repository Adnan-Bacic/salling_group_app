import React from 'react';
import { FlatList } from 'react-native';
import { MainTemplate } from 'src/templates';
import { NoResults, Spinner } from 'src/components';
import { useAppSelector } from 'src/redux/hooks';
import { uiSelector } from 'src/redux/selectors';
import { ProductSuggestionItem, SuggestionsActionContent } from './components';

interface FrequentlyBoughtTogehterProps {
  route:{
    params:{
      items: any
    }
  }
}
const FrequentlyBoughtTogehter: React.FunctionComponent<FrequentlyBoughtTogehterProps> = ({
  route,
}): React.ReactElement => {
  const { items } = route.params;

  const ui = useAppSelector(uiSelector);

  const renderItem = ({ item }: any) => {
    return (
      <ProductSuggestionItem
        key={item.id}
        title={item.description}
        image={item.img}
        price={item.price}
        actionContent={(
          <SuggestionsActionContent
            item1={item}
          />
)}
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

export default FrequentlyBoughtTogehter;
