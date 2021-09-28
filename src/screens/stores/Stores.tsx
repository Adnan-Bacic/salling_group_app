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
enum FilterButtonTextProps {
  'ShowFilters' = 'Show filters',
  'HideFilters' = 'Hide filters',
}
const Stores = ({ navigation }: StoresInterface): React.ReactElement => {
  const [filtersShown, setFiltersShown] = useState(false);
  const [filterButtonText, setFilterButtonText] = useState<FilterButtonTextProps>(FilterButtonTextProps.ShowFilters);

  // OPTIONS FOR SEARCH

  // filters
  const [zip, setZip] = useState('');

  // attributes
  const [babyChanging, setBabyChanging] = useState<null | boolean>(null);
  const [bakery, setBakery] = useState<null | boolean>(null);
  const [carlsJunior, setCarlsJunior] = useState<null | boolean>(null);
  const [enablingFacilities, setEnablingFacilities] = useState<null | boolean>(null);
  const [flowers, setFlowers] = useState<null | boolean>(null);
  const [garden, setGarden] = useState<null | boolean>(null);
  const [holidayOpen, setHolidayOpen] = useState<null | boolean>(null);
  const [nonFood, setNonFood] = useState<null | boolean>(null);
  const [open247, setOpen247] = useState<null | boolean>(null);
  const [parking, setParking] = useState<null | boolean>(null);
  const [noParkingRestrictions, setNoParkingRestrictions] = useState<null | boolean>(null); // reverse 
  const [petFood, setPetFood] = useState<null | boolean>(null);
  const [pharmacy, setPharmacy] = useState<null | boolean>(null);
  const [scanAndGo, setScanAndGo] = useState<null | boolean>(null);
  //const [smileyscheme, setSmileyscheme] = useState<null | boolean>(null);
  const [starbucks, setStarbucks] = useState<null | boolean>(null);
  const [swipBox, setSwipBox] = useState<null | boolean>(null);
  const [wc, setWc] = useState<null | boolean>(null);
  const [wifi, setWifi] = useState<null | boolean>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getStores = () => {
      const options = {
        //zip: zip,
        babyChanging: babyChanging,
        bakery: bakery,
        carlsJunior: carlsJunior,
        enablingFacilities: enablingFacilities,
        flowers: flowers,
        garden: garden,
        holidayOpen: holidayOpen,
        nonFood: nonFood,
        open247: open247,
        parking: parking,
        noParkingRestrictions: noParkingRestrictions,
        petFood: petFood,
        pharmacy: pharmacy,
        scanAndGo: scanAndGo,
        starbucks: starbucks,
        swipBox: swipBox,
        wc: wc,
        wifi: wifi,
      }
      dispatch(functions.stores.getStores(options));
    };

    getStores();
  }, [dispatch, zip, babyChanging, bakery, carlsJunior, enablingFacilities, flowers, garden, holidayOpen, nonFood, open247, parking, noParkingRestrictions, petFood, pharmacy, scanAndGo, starbucks, swipBox, wc, wifi]);

  const stores = useAppSelector((state) => { return state.stores; });
  console.log('storedata length', stores?.storesData?.length);
  const ui = useAppSelector((state) => { return state.ui; });
  // console.log('stores', stores);

  // not needed?
  if (ui.isLoading) {
    // return <Spinner />;
  }

  return (
    <>
      <MainTemplate>
        <>
          <Paper.TextInput
            keyboardType="numeric"
            label="zip"
            value={zip}
            mode="outlined"
            onChangeText={(text) => {
              setZip(text);
            }}
          />
          <Paper.Button
            onPress={() => {
              setFiltersShown((prevState) => { return !prevState; });
              if(filterButtonText === FilterButtonTextProps.ShowFilters){
                setFilterButtonText(FilterButtonTextProps.ShowFilters)
              } else {
                setFilterButtonText(FilterButtonTextProps.HideFilters)
              }
            }}
          >
            {filterButtonText}
          </Paper.Button>
          {filtersShown && (
            <>
              <Paper.Text>
                add filters. this shows stores where your filters apply. if unchecked, stores may or may not have the specified filter
              </Paper.Text>
              <View
                style={styles.filterContainer}
              >

                <Paper.Text style={{ width: '100%' }}>test</Paper.Text>

                {/* filters */}
                <FilterItem
                  title="baby changing"
                  status={babyChanging ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (babyChanging === true) {
                      setBabyChanging(null);
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
                      setBakery(null);
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
                      setCarlsJunior(null);
                    } else {
                      setCarlsJunior(true);
                    }
                  }}
                />
                <FilterItem
                  title="enablingFacilities"
                  status={enablingFacilities ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (enablingFacilities === true) {
                      setEnablingFacilities(null);
                    } else {
                      setEnablingFacilities(true);
                    }
                  }}
                />
                <FilterItem
                  title="flowers"
                  status={flowers ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (flowers === true) {
                      setFlowers(null);
                    } else {
                      setFiltersShown(true);
                    }
                  }}
                />
                <FilterItem
                  title="garden"
                  status={garden ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (garden === true) {
                      setGarden(null);
                    } else {
                      setGarden(true);
                    }
                  }}
                />
                <FilterItem
                  title="holidayOpen"
                  status={holidayOpen ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (holidayOpen === true) {
                      setHolidayOpen(null);
                    } else {
                      setHolidayOpen(true);
                    }
                  }}
                />
                <FilterItem
                  title="nonFood"
                  status={nonFood ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (nonFood === true) {
                      setNonFood(null);
                    } else {
                      setNonFood(true);
                    }
                  }}
                />
                <FilterItem
                  title="open247"
                  status={open247 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (open247 === true) {
                      setOpen247(null);
                    } else {
                      setOpen247(true);
                    }
                  }}
                />
                <FilterItem
                  title="parking"
                  status={parking ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (parking === true) {
                      setParking(null);
                    } else {
                      setParking(true);
                    }
                  }}
                />
                <FilterItem
                  title="parkingRestrictions"
                  status={noParkingRestrictions ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (noParkingRestrictions === true) {
                      setNoParkingRestrictions(null);
                    } else {
                      setNoParkingRestrictions(true);
                    }
                  }}
                />
                <FilterItem
                  title="petFood"
                  status={petFood ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (petFood === true) {
                      setPetFood(null);
                    } else {
                      setPetFood(true);
                    }
                  }}
                />
                <FilterItem
                  title="pharmacy"
                  status={pharmacy ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (pharmacy === true) {
                      setPharmacy(null);
                    } else {
                      setPharmacy(true);
                    }
                  }}
                />
                <FilterItem
                  title="scanAndGo"
                  status={scanAndGo ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (scanAndGo === true) {
                      setScanAndGo(null);
                    } else {
                      setScanAndGo(true);
                    }
                  }}
                />
                <FilterItem
                  title="starbucks"
                  status={starbucks ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (starbucks === true) {
                      setStarbucks(null);
                    } else {
                      setStarbucks(true);
                    }
                  }}
                />
                <FilterItem
                  title="swipBox"
                  status={swipBox ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (swipBox === true) {
                      setSwipBox(null);
                    } else {
                      setSwipBox(true);
                    }
                  }}
                />
                <FilterItem
                  title="wc"
                  status={wc ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (wc === true) {
                      setWc(null);
                    } else {
                      setWc(true);
                    }
                  }}
                />
                <FilterItem
                  title="wifi"
                  status={wifi ? 'checked' : 'unchecked'}
                  onPress={() => {
                    if (wifi === true) {
                      setWifi(null);
                    } else {
                      setWifi(true);
                    }
                  }}
                />
                {/* filters */}

              </View>
            </>
          )}
          <View
            style={styles.spacer}
          />
          {ui.isLoading && (
            <Spinner />
          )}
          {!ui.isLoading && (
          <ScrollView>
            {(stores.storeData?.length === 0) ? (
              <Paper.Text>no results found</Paper.Text>
            ) : (
              <Paper.Text>results found</Paper.Text>
            )}

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
          )}
        </>
      </MainTemplate>
    </>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  spacer: {
    marginTop: 20,
  },
});

export default Stores;
