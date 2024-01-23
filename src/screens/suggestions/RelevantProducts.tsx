import React, { useState } from 'react';
import {
  FlatList,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { MainTemplate } from 'src/templates';
import * as functions from 'src/redux/functions';
import { suggestionsSelector } from 'src/redux/selectors';
import { NoResults, Spinner } from 'src/components';
import { ProductSuggestionItem, SuggestionsActionContent } from './components';

interface RelevantProductsProps {
  navigation: any;
}

const RelevantProducts: React.FunctionComponent<RelevantProductsProps> = (): React.ReactElement => {
  const [query, setQuery] = useState('');
  const [prevQuery, setPrevQuery] = useState('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const suggestions = useAppSelector(suggestionsSelector);

  const getData = async () => {
    setPrevQuery(query);

    // prevent exessive requests if zip hasent changed
    if (query === prevQuery) {
      return;
    }

    setIsLoading(true);
    await dispatch(functions.suggestions.getRelevantProducts(query));
    setIsLoading(false);
  };

  const renderStoreItem = ({ item }: any) => {
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

  return (
    <MainTemplate>
      <>
        <Paper.Title>
          Search product
        </Paper.Title>
        <Paper.TextInput
          label="product"
          value={query}
          onChangeText={(text) => { return setQuery(text); }}
          mode="outlined"
          onSubmitEditing={getData}
        />
        <Paper.Button
          onPress={getData}
        >
          search
        </Paper.Button>

        {(suggestions.relevantProducts && !isLoading) && (
        <FlatList
          data={suggestions.relevantProducts.suggestions}
          renderItem={renderStoreItem}
          ListEmptyComponent={<NoResults />}
        />
        )}

        {isLoading && (
          <Spinner />
        )}
      </>
    </MainTemplate>
  );
};

export default RelevantProducts;
