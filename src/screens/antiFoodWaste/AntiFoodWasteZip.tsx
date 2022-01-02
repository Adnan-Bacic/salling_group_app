import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { MainTemplate } from 'src/templates';
import * as functions from 'src/redux/functions';
import { foodWasteSelector, uiSelector } from 'src/redux/selectors';
import { NoResults, Spinner } from 'src/components';
import { StoreItem } from './components';

interface FoodWasteInterface {
  navigation: any;
}

const AntiFoodWasteZip: React.FunctionComponent<FoodWasteInterface> = ({
  navigation,
}): React.ReactElement => {
  const [zip, setZip] = useState('');
  const [prevZip, setPrevZip] = useState('');

  const dispatch = useAppDispatch();
  const foodWaste = useAppSelector(foodWasteSelector);
  const ui = useAppSelector(uiSelector);

  const getData = async () => {
    setPrevZip(zip);

    // prevent exessive requests if zip hasent changed
    if (zip === prevZip) {
      return;
    }

    await dispatch(functions.foodWaste.getFoodWasteByZip(zip));
  };

  const renderStoreItem = ({ item }: any) => {
    const ActionContent = ({ items }: any) => {
      return (
        <Paper.Button
          onPress={() => {
            navigation.navigate('AntiFoodWasteStore', {
              items: items.clearances,
            });
          }}
        >
          see items
        </Paper.Button>
      );
    };
    return (
      <StoreItem
        key={item.store.id}
        name={item.store.name}
        street={item.store.address.street}
        city={item.store.address.city}
        zip={item.store.address.zip}
        country={item.store.address.country}
        amount={item.clearances.length}
        actionContent={(
          <ActionContent
            items={item}
          />
)}
      >
        children
      </StoreItem>
    );
  };
  return (
    <MainTemplate>
      <View
        style={styles.container}
      >
        <Paper.Title>
          Search zip
        </Paper.Title>
        <Paper.TextInput
          label="zip"
          value={zip}
          onChangeText={(text) => { return setZip(text); }}
          mode="outlined"
          keyboardType="number-pad"
          onSubmitEditing={getData}
          maxLength={6}
        />
        <Paper.Button
          onPress={getData}
        >
          search
        </Paper.Button>

        {(foodWaste.foodItems && !ui.isLoading) && (
        <FlatList
          data={foodWaste.foodItems}
          renderItem={renderStoreItem}
          ListEmptyComponent={NoResults}
        />
        )}

        {ui.isLoading && (
        <Spinner />
        )}
      </View>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AntiFoodWasteZip;
