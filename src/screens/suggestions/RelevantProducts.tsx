import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { MainTemplate } from 'src/templates';
import * as functions from 'src/redux/functions';
import { suggestionsSelector, uiSelector } from 'src/redux/selectors';
import { NoResults, Spinner } from 'src/components';

interface RelevantProductsProps {
    navigation: any;
}

const RelevantProducts: React.FunctionComponent<RelevantProductsProps> = ({
    navigation
}): React.ReactElement => {
  const [query, setQuery] = useState('');
  const [prevQuery, setPrevQuery] = useState('');

  const dispatch = useAppDispatch();
  const suggestions = useAppSelector(suggestionsSelector);
  const ui = useAppSelector(uiSelector);

  const getData = async () => {
    setPrevQuery(query);

    // prevent exessive requests if zip hasent changed
    if (query === prevQuery) {
      return;
    }

    await dispatch(functions.suggestions.getRelevantProducts(query));
  };

  const renderStoreItem = ({ item }) => {
     console.log(item);
      /*
      <StoreItem
        key={item.store.id}
        name={item.store.name}
        street={item.store.address.street}
        city={item.store.address.city}
        zip={item.store.address.zip}
        country={item.store.address.country}
        onPressAction={() => {
          navigation.navigate('FoodWasteStore', {
            items: item.clearances,
          });
        }}
        amount={item.clearances.length}
      />
      */

    return (
      <Text>123</Text>

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

        {(suggestions.relevantProducts && !ui.isLoading) && (
        <FlatList
          data={suggestions.relevantProducts.suggestions}
          renderItem={renderStoreItem}
          ListEmptyComponent={NoResults}
        />
        )}

{ui.isLoading && (
        <Spinner />
        )}
      </>
    </MainTemplate>
  );
};

export default RelevantProducts;
