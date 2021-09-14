import React, { useEffect } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView, FlatList,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as functions from '../../redux/functions';
import { MainTemplate } from '../../templates';
import { Spinner } from '../../components';
import StoreItem from './StoreItem';

const Stores = ({ navigation }): React.ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getStores = () => {
      dispatch(functions.stores.getStores('data'));
    };

    getStores();
  }, [dispatch]);

  const stores = useAppSelector((state) => { return state.stores; });
  const ui = useAppSelector((state) => { return state.ui; });
  // console.log('stores', stores);

  if (ui.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <MainTemplate>
        <View
          style={styles.spacer}
        />
        <ScrollView>
          {stores.storesData && (
          <>
            {stores.storesData.map((item) => {
            // console.log('i', item.hours)
              return (
                <StoreItem
                  key={item.id}
                  name={item.name}
                  street={item.address.street}
                  city={item.address.city}
                  zip={item.address.zip}
                  attributes={item.attributes}
                  onPress={() => {
                    console.log(item.id);
                  }}
                />
              );
            })}
          </>
          )}
        </ScrollView>
      </MainTemplate>
    </>
  );
};

const styles = StyleSheet.create({
  spacer: {
    marginTop: 20,
  },
});

export default Stores;
