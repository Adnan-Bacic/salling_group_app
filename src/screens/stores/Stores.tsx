import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import * as functions from '../../redux/functions';
import { MainTemplate } from '../../templates';
import { Spinner, NoResults } from '../../components';
import StoreItem from './StoreItem';
import FilterCheckBoxItem from './FilterCheckBoxItem';
import FilterRadioButtonItem from './FilterRadioButtonItem';

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
  enum Countries {
    dk = 'dk',
    se = 'se',
    de = 'de',
    pl = 'pl',
  }
  enum Brands {
    netto = 'netto',
    bilka = 'bilka',
    foetex = 'foetex',
    salling = 'salling',
    carlsjr = 'carlsjr',
    br = 'br',
  }
  const [zip, setZip] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<Countries | string>('');
  const [street, setStreet] = useState<string>('');
  const [brand, setBrand] = useState<Brands | string>('');

  // attributes
  const [babyChanging, setBabyChanging] = useState<boolean>(false);
  const [bakery, setBakery] = useState<boolean>(false);
  const [carlsJunior, setCarlsJunior] = useState<boolean>(false);
  const [enablingFacilities, setEnablingFacilities] = useState<boolean>(false);
  const [flowers, setFlowers] = useState<boolean>(false);
  const [garden, setGarden] = useState<boolean>(false);
  const [holidayOpen, setHolidayOpen] = useState<boolean>(false);
  const [nonFood, setNonFood] = useState<boolean>(false);
  const [open247, setOpen247] = useState<boolean>(false);
  const [parking, setParking] = useState<boolean>(false);
  const [noParkingRestrictions, setNoParkingRestrictions] = useState<boolean>(false); // reverse
  const [petFood, setPetFood] = useState<boolean>(false);
  const [pharmacy, setPharmacy] = useState<boolean>(false);
  const [scanAndGo, setScanAndGo] = useState<boolean>(false);
  // const [smileyscheme, setSmileyscheme] = useState<boolean>(false);
  const [starbucks, setStarbucks] = useState<boolean>(false);
  const [swipBox, setSwipBox] = useState<boolean>(false);
  const [wc, setWc] = useState<boolean>(false);
  const [wifi, setWifi] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getStores = () => {
      const options = {
        // filters
        zip: zip,
        city: city,
        country: country,
        street: street,
        brand: brand,

        // attributes
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
      };
      dispatch(functions.stores.getStores(options));
    };

    getStores();
  }, [babyChanging, bakery, brand, carlsJunior, city, country, dispatch, enablingFacilities, flowers, garden, holidayOpen, noParkingRestrictions, nonFood, open247, parking, petFood, pharmacy, scanAndGo, starbucks, street, swipBox, wc, wifi, zip]);

  const stores = useAppSelector((state) => { return state.stores; });
  const ui = useAppSelector((state) => { return state.ui; });

  // not needed?
  if (ui.isLoading) {
    // return <Spinner />;
  }

  interface FlatListItemProps {
    item: any;
  }
  const renderStoreItem = ({ item }: FlatListItemProps) => {
    return (
      <StoreItem
        key={item.id}
        name={item.name}
        street={item.address.street}
        city={item.address.city}
        zip={item.address.zip}
        country={item.address.country}
        attributes={item.attributes}
        onPress={() => {
          navigation.navigate('Store', {
            name: item.name,
          });
        }}
      />
    );
  };

  return (
    <>
      <MainTemplate>
        <>
          <Paper.Button
            onPress={() => {
              setFiltersShown((prevState) => { return !prevState; });
              if (filterButtonText === FilterButtonTextProps.ShowFilters) {
                setFilterButtonText(FilterButtonTextProps.HideFilters);
              } else {
                setFilterButtonText(FilterButtonTextProps.ShowFilters);
              }
            }}
          >
            {filterButtonText}
          </Paper.Button>
          {filtersShown && (
            <ScrollView>
              <Paper.Text>
                add filters
              </Paper.Text>
              {/* filters */}
              <Paper.TextInput
                keyboardType="numeric"
                label="zip"
                value={zip}
                mode="outlined"
                onChangeText={(text) => {
                  setZip(text);
                }}
              />
              <Paper.TextInput
                label="city"
                value={city}
                mode="outlined"
                onChangeText={(text) => {
                  setCity(text);
                }}
              />
              <Paper.TextInput
                label="street (exact match only)"
                value={street}
                mode="outlined"
                onChangeText={(text) => {
                  setStreet(text);
                }}
              />

              <Paper.Text>country</Paper.Text>

              <View
                style={styles.filterRowContainer}
              >
                <FilterRadioButtonItem
                  title={Countries.dk}
                  value={Countries.dk}
                  status={country === Countries.dk ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCountry(Countries.dk);
                  }}
                />

                <FilterRadioButtonItem
                  title={Countries.se}
                  value={Countries.se}
                  status={country === Countries.se ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCountry(Countries.se);
                  }}
                />

                <FilterRadioButtonItem
                  title={Countries.de}
                  value={Countries.de}
                  status={country === Countries.de ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCountry(Countries.de);
                  }}
                />

                <FilterRadioButtonItem
                  title={Countries.pl}
                  value={Countries.pl}
                  status={country === Countries.pl ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCountry(Countries.pl);
                  }}
                />
              </View>

              <Paper.Button
                onPress={() => {
                  setCountry('');
                }}
              >
                reset country
              </Paper.Button>

              <Paper.Text>
                brand
              </Paper.Text>

              <View
                style={styles.filterRowContainer}
              >
                <FilterRadioButtonItem
                  title={Brands.netto}
                  value={Brands.netto}
                  status={brand === Brands.netto ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.netto);
                  }}
                />

                <FilterRadioButtonItem
                  title={Brands.bilka}
                  value={Brands.bilka}
                  status={brand === Brands.bilka ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.bilka);
                  }}
                />

                <FilterRadioButtonItem
                  title={Brands.foetex}
                  value={Brands.foetex}
                  status={brand === Brands.foetex ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.foetex);
                  }}
                />

                <FilterRadioButtonItem
                  title={Brands.salling}
                  value={Brands.salling}
                  status={brand === Brands.salling ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.salling);
                  }}
                />

                <FilterRadioButtonItem
                  title={Brands.carlsjr}
                  value={Brands.carlsjr}
                  status={brand === Brands.carlsjr ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.carlsjr);
                  }}
                />

                <FilterRadioButtonItem
                  title={Brands.br}
                  value={Brands.br}
                  status={brand === Brands.br ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.br);
                  }}
                />
              </View>

              <Paper.Button
                onPress={() => {
                  setBrand('');
                }}
              >
                reset brand
              </Paper.Button>

              <Paper.Text>filters</Paper.Text>
              <View
                style={styles.filterRowContainer}
              >

                {/* attributes */}
                <FilterCheckBoxItem
                  title="baby changing"
                  status={babyChanging ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBabyChanging((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="bakery"
                  status={bakery ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBakery((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="carlsJunior"
                  status={carlsJunior ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCarlsJunior((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="enablingFacilities"
                  status={enablingFacilities ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setEnablingFacilities((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="flowers"
                  status={flowers ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setFlowers((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="garden"
                  status={garden ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setGarden((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="holidayOpen"
                  status={holidayOpen ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setHolidayOpen((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="nonFood"
                  status={nonFood ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setNonFood((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="open247"
                  status={open247 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setOpen247((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="parking"
                  status={parking ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setParking((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="parkingRestrictions"
                  status={noParkingRestrictions ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setNoParkingRestrictions((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="petFood"
                  status={petFood ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setPetFood((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="pharmacy"
                  status={pharmacy ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setPharmacy((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="scanAndGo"
                  status={scanAndGo ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setScanAndGo((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="starbucks"
                  status={starbucks ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setStarbucks((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="swipBox"
                  status={swipBox ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setSwipBox((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="wc"
                  status={wc ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setWc((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title="wifi"
                  status={wifi ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setWifi((prevState) => { return !prevState; });
                  }}
                />

                <Paper.Button
                  onPress={() => {
                    console.log('todo?');
                  }}
                >
                  reset filters
                </Paper.Button>
                {/* filters */}

              </View>
            </ScrollView>
          )}
          <View
            style={styles.spacer}
          />
          {ui.isLoading && (
            <Spinner />
          )}

          {!ui.isLoading && !filtersShown && (
          <FlatList
            data={stores.storesData}
            renderItem={renderStoreItem}
            ListEmptyComponent={NoResults}
          />
          )}

          {!ui.isLoading && (
          <View>

            {stores.storesData === 1 && (
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
                      navigation.navigate('Store', {
                        name: item.name,
                      });
                    }}
                  />
                );
              })}
            </>
            )}
          </View>
          )}
        </>
      </MainTemplate>
    </>
  );
};

const styles = StyleSheet.create({
  filterRowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  spacer: {
    marginTop: 20,
  },
});

export default Stores;
