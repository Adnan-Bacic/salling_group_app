import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { MainTemplate } from 'src/templates';
import * as functions from 'src/redux/functions';
import { foodWasteSelector, uiSelector } from 'src/redux/selectors';
import { NoResults, Spinner } from 'src/components';
import StoreItem from './StoreItem';

const FoodWaste = ({ navigation }): React.ReactElement => {
  const [zip, setZip] = useState('');

  const dispatch = useAppDispatch();
  const foodWaste = useAppSelector(foodWasteSelector);
  console.log('fw', foodWaste);
  const ui = useAppSelector(uiSelector);

  const getData = async () => {
    await functions.foodWaste.getFoodWasteByZip(zip);
  };

  const renderStoreItem = ({ item }) => {
    console.log(item.store.id);

    return (
      <StoreItem
        key={item.store.id}
        name={item.store.name}
        street={item.store.address.street}
        city={item.store.address.city}
        zip={item.store.address.zip}
        country={item.store.address.country}
        onPressAction={() => {
          navigation.navigate('FoodWasteStore');
        }}
        amount={item.clearances.length}
      />
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
        />
        <Paper.Button
          onPress={async () => {
            await dispatch(functions.foodWaste.getFoodWasteByZip(zip));
          }}
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

        {/*
        {(foodWaste.foodItems && !ui.isLoading) && (
          foodWaste.foodItems.map((item) => {
            console.log('item', item)
            return(
              <Paper.Card>
              <Paper.Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Paper.Card.Content>
                <Paper.Title>Card title</Paper.Title>
                <Paper.Paragraph>Card content</Paper.Paragraph>
              </Paper.Card.Content>
              <Paper.Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Paper.Card.Actions>
                <Paper.Button>Cancel</Paper.Button>
                <Paper.Button>Ok</Paper.Button>
              </Paper.Card.Actions>
            </Paper.Card>
            )
          })
        )}
      </View>

      {(foodWaste.foodItems && !ui.isLoading) && (
            <>
              {(foodWaste.foodItems.length === 0) && (
              <NoResults></NoResults>
              )}
            </>
          )}

           */}
        {ui.isLoading && (
        <Spinner />
        )}
      </View>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    alignSelf: 'flex-end',
  },
  container: {
    flex: 1,
  },
});

export default FoodWaste;
