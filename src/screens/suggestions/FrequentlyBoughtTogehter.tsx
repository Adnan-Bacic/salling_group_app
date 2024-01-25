import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { MainTemplate } from 'src/templates';
import { NoResults, Spinner } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { suggestionsSelector } from 'src/redux/selectors';
import * as functions from 'src/redux/functions';
import { ProductSuggestionItem, SuggestionsActionContent } from './components';

interface FrequentlyBoughtTogehterProps {
  route:{
    params:{
      id: string
    }
  }
}
const FrequentlyBoughtTogehter: React.FunctionComponent<FrequentlyBoughtTogehterProps> = ({
  navigation, route,
}): React.ReactElement => {
  const { id } = route.params;

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const suggestions = useAppSelector(suggestionsSelector);

  useEffect(() => {
    const getItems = async () => {
      setIsLoading(true);

      await dispatch(functions.suggestions.getFrequentlyBoughtTogehter(id));

      setIsLoading(false);
    };

    getItems();
  }, [dispatch, id]);

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
            navigation={navigation}
          />
)}
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
        data={suggestions.frequentlyBoughtTogehter}
        renderItem={renderItem}
        ListEmptyComponent={<NoResults />}
      />
    </MainTemplate>
  );
};

export default FrequentlyBoughtTogehter;
