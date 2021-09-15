import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as functions from '../../redux/functions';
import { MainTemplate } from '../../templates';
import { Spinner } from '../../components';
import StoreItem from './StoreItem';
import FilterItem from './FilterItem';

interface StoresInterface {
  navigation: any
}
const Stores = ({ navigation }: StoresInterface): React.ReactElement => {
  const [filtersShown, setFiltersShown] = useState(true);

  // filters
  const [babyChanging, setBabyChanging] = useState<string | boolean>('');
  const [bakery, setBakery] = useState<string | boolean>('');
  const [carlsJunior, setCarlsJunior] = useState<string | boolean>('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getStores = () => {
      dispatch(functions.stores.getStores(babyChanging, bakery, carlsJunior));
    };

    getStores();
  }, [babyChanging, bakery, carlsJunior, dispatch]);

  const stores = useAppSelector((state) => { return state.stores; });
  const ui = useAppSelector((state) => { return state.ui; });
  // console.log('stores', stores);

  // not needed?
  if (ui.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <MainTemplate>
        <>
          <Paper.Button
            onPress={() => {
              setFiltersShown((prevState) => { return !prevState; });
            }}
          >
            show filters
          </Paper.Button>
          {filtersShown && (
            <>
              <Paper.Text>
                add filters. this shows stores where your filters apply. if unchecked, stores may or may not have the specified filter
              </Paper.Text>
              <View
                style={styles.filterContainer}
              >
                <FilterItem
                  title="baby changing"
                  status={babyChanging ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (babyChanging === true) {
                      setBabyChanging('');
                    } else {
                      setBabyChanging(true);
                    }
                  }}
                />
                <FilterItem
                  title="bakery"
                  status={bakery ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (bakery === true) {
                      setBakery('');
                    } else {
                      setBakery(true);
                    }
                  }}
                />
                                <FilterItem
                  title="carlsJunior"
                  status={carlsJunior ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (carlsJunior === true) {
                      setCarlsJunior('');
                    } else {
                      setCarlsJunior(true);
                    }
                  }}
                />

              </View>
            </>
          )}
          <View
            style={styles.spacer}
          />
          <ScrollView>
            {stores.storesData && (
            <>
              {stores.storesData.map((item: any) => {
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
        </>
      </MainTemplate>
    </>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  spacer: {
    marginTop: 20,
  },
});

export default Stores;
