import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { MainTemplate } from 'src/templates';
import * as functions from 'src/redux/functions';
import { foodWasteSelector, uiSelector } from 'src/redux/selectors';
import { NoResults, Spinner } from 'src/components';
import { validators } from 'src/utility';
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

    if (zip.length < 4) {
      Alert.alert('Zip must be at least 4 characters long');
      return;
    }

    dispatch(functions.foodWaste.getFoodWasteByZip(zip));
  };

  const renderStoreItem = ({ item }: any) => {
    const ActionContent: React.FunctionComponent<any> = (): React.ReactElement => {
      return (
        <Paper.Button
          onPress={() => {
            navigation.navigate('AntiFoodWasteStore', {
              id: item.store.id,
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
          <ActionContent />
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
          onChangeText={(text) => {
            if (!validators.numbersAndDashZip(text)) {
              return;
            }
            setZip(text);
          }}
          mode="outlined"
          keyboardType={Platform.OS === 'android' ? 'numeric' : 'numbers-and-punctuation'}
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
          ListEmptyComponent={<NoResults />}
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
