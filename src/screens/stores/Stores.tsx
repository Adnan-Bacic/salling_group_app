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
  // const [smileyscheme, setSmileyscheme] = useState<null | boolean>(null);
  const [starbucks, setStarbucks] = useState<null | boolean>(null);
  const [swipBox, setSwipBox] = useState<null | boolean>(null);
  const [wc, setWc] = useState<null | boolean>(null);
  const [wifi, setWifi] = useState<null | boolean>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getStores = () => {
      const options = {
        //filters
        zip: zip,
        country: country,
        brand: brand,

        //attributes
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
  }, [babyChanging, bakery, brand, carlsJunior, country, dispatch, enablingFacilities, flowers, garden, holidayOpen, noParkingRestrictions, nonFood, open247, parking, petFood, pharmacy, scanAndGo, starbucks, swipBox, wc, wifi, zip]);

  const stores = useAppSelector((state) => { return state.stores; });
  const ui = useAppSelector((state) => { return state.ui; });

  // not needed?
  if (ui.isLoading) {
    // return <Spinner />;
  }

  interface FlatListItemProps {
    item: any;
  }
  const renderItem = ({ item }: FlatListItemProps) => {
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
            <View>
              <Paper.Text>
                add filters. this shows stores where your filters apply. if unchecked, stores may or may not have the specified filter
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
                value={city}
                mode="outlined"
                onChangeText={(text) => {
                  setStreet(text);
                }}
              />

<Paper.Text>country</Paper.Text>

                
 
              <FilterRadioButtonItem
              title="title"
              value={Countries.dk}
              status={country === Countries.dk ? 'checked' : 'unchecked'}
              onPress={() =>{
                setCountry(Countries.dk)
              }}
              ></FilterRadioButtonItem>

<FilterRadioButtonItem
              title="title"
              value={Countries.se}
              status={country === Countries.se ? 'checked' : 'unchecked'}
              onPress={() =>{
                setCountry(Countries.se)
              }}
              ></FilterRadioButtonItem>

<FilterRadioButtonItem
              title="title"
              value={Countries.de}
              status={country === Countries.de ? 'checked' : 'unchecked'}
              onPress={() =>{
                setCountry(Countries.de)
              }}
              ></FilterRadioButtonItem>

<FilterRadioButtonItem
              title="title"
              value={Countries.pl}
              status={country === Countries.pl ? 'checked' : 'unchecked'}
              onPress={() =>{
                setCountry(Countries.pl)
              }}
              ></FilterRadioButtonItem>
              

              <Paper.Text>
                brand
              </Paper.Text>

              <FilterRadioButtonItem
              title="title"
              value={Brands.netto}
              status={brand === Brands.netto ? 'checked' : 'unchecked'}
              onPress={() =>{
                setBrand(Brands.netto)
              }}
               />

<FilterRadioButtonItem
              title="title"
              value={Brands.bilka}
              status={brand === Brands.bilka ? 'checked' : 'unchecked'}
              onPress={() =>{
                setBrand(Brands.bilka)
              }}
               />

<FilterRadioButtonItem
              title="title"
              value={Brands.foetex}
              status={brand === Brands.foetex ? 'checked' : 'unchecked'}
              onPress={() =>{
                setBrand(Brands.foetex)
              }}
               />

<FilterRadioButtonItem
              title="title"
              value={Brands.salling}
              status={brand === Brands.salling ? 'checked' : 'unchecked'}
              onPress={() =>{
                setBrand(Brands.salling)
              }}
               />

<FilterRadioButtonItem
              title="title"
              value={Brands.carlsjr}
              status={brand === Brands.carlsjr ? 'checked' : 'unchecked'}
              onPress={() =>{
                setBrand(Brands.carlsjr)
              }}
               />

<FilterRadioButtonItem
              title="title"
              value={Brands.br}
              status={brand === Brands.br ? 'checked' : 'unchecked'}
              onPress={() =>{
                setBrand(Brands.br)
              }}
               />


              <View
                style={styles.filterAttributesContainer}
              >

                {/* attributes */}

                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
                <FilterCheckBoxItem
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
            </View>
          )}
          <View
            style={styles.spacer}
          />
          {ui.isLoading && (
            <Spinner />
          )}

          <FlatList
            //data={stores.storesData}
            renderItem={renderItem}
            ListEmptyComponent={<NoResults />}
          />

          {!ui.isLoading && (
          <View>

            {stores.storesData && (
            <>
              <ScrollView>
                {stores.storesData.map((item: any) => {
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
              </ScrollView>
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
  filterAttributesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  filterRadioButtonsContainer:{
    //backgroundColor: 'red',
    //flex: 1,
    //width: '40%'
  },
  spacer: {
    marginTop: 20,
  },
});

export default Stores;
