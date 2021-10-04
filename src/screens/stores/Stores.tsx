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
import { enums } from '../../helpers';
import StoreItem from './StoreItem';
import FilterCheckBoxItem from './FilterCheckBoxItem';
import FilterRadioButtonItem from './FilterRadioButtonItem';

interface StoresInterface {
  navigation: any
}

const Stores = ({ navigation }: StoresInterface): React.ReactElement => {
  enum ViewModes {
    filterView = 'filterView',
    storesView = 'storesView',
  }
  const [viewMode, setViewMode] = useState<ViewModes>(ViewModes.storesView);

  // OPTIONS FOR SEARCH
  // filters
  enum Countries {
    empty = '',
    dk = 'dk',
    se = 'se',
    de = 'de',
    pl = 'pl',
  }
  enum Brands {
    empty = '',
    netto = 'netto',
    bilka = 'bilka',
    foetex = 'foetex',
    salling = 'salling',
    carlsjr = 'carlsjr',
    br = 'br',
  }
  const [zip, setZip] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<Countries>(Countries.empty);
  const [street, setStreet] = useState<string>('');
  const [brand, setBrand] = useState<Brands>(Brands.empty);

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
  const [parkingRestrictions, setParkingRestrictions] = useState<boolean>(false);
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
        parkingRestrictions: parkingRestrictions,
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
  }, [babyChanging, bakery, brand, carlsJunior, city, country, dispatch, enablingFacilities, flowers, garden, holidayOpen, parkingRestrictions, nonFood, open247, parking, petFood, pharmacy, scanAndGo, starbucks, street, swipBox, wc, wifi, zip]);

  const stores = useAppSelector((state) => { return state.stores; });
  const ui = useAppSelector((state) => { return state.ui; });

  interface FlatListItemProps {
    item: any;
  }
  const renderStoreItem = ({ item }: FlatListItemProps) => {
    // TODO: handle br - not a food chain
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

  const setAllAttributsFalse = () => {
    setBabyChanging(false);
    setBakery(false);
    setCarlsJunior(false);
    setEnablingFacilities(false);
    setFlowers(false);
    setGarden(false);
    setHolidayOpen(false);
    setNonFood(false);
    setOpen247(false);
    setParking(false);
    setParkingRestrictions(false);
    setPetFood(false);
    setPharmacy(false);
    setScanAndGo(false);
    setStarbucks(false);
    setSwipBox(false);
    setWc(false);
    setWifi(false);
  };

  return (
    <>
      <MainTemplate>
        <>
          <Paper.Button
            onPress={() => {
              if (viewMode === ViewModes.storesView) {
                setViewMode(ViewModes.filterView);
              } else {
                setViewMode(ViewModes.storesView);
              }
            }}
          >
            {viewMode === ViewModes.storesView ? (
              'Show filters'
            ) : (
              'Hide filters'
            )}
          </Paper.Button>
          {viewMode === ViewModes.filterView && (
            <ScrollView>
              <Paper.Title>
                Add filters for more precise content
              </Paper.Title>
              <Paper.Subheading>
                Location
              </Paper.Subheading>
              {/* filters */}
              <Paper.TextInput
                keyboardType="numeric"
                label="Zip code"
                value={zip}
                mode="outlined"
                onChangeText={(text) => {
                  setZip(text);
                }}
              />
              <Paper.TextInput
                label="City"
                value={city}
                mode="outlined"
                onChangeText={(text) => {
                  setCity(text);
                }}
              />
              <Paper.TextInput
                label="Street (exact match only)"
                value={street}
                mode="outlined"
                onChangeText={(text) => {
                  setStreet(text);
                }}
              />

              <Paper.Subheading>Country</Paper.Subheading>

              <View
                style={styles.filterRowContainer}
              >
                <FilterRadioButtonItem
                  title="Denmark"
                  value={Countries.dk}
                  status={country === Countries.dk ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCountry(Countries.dk);
                  }}
                />

                <FilterRadioButtonItem
                  title="Sweden"
                  value={Countries.se}
                  status={country === Countries.se ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCountry(Countries.se);
                  }}
                />

                <FilterRadioButtonItem
                  title="Germany"
                  value={Countries.de}
                  status={country === Countries.de ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCountry(Countries.de);
                  }}
                />

                <FilterRadioButtonItem
                  title="Poland"
                  value={Countries.pl}
                  status={country === Countries.pl ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCountry(Countries.pl);
                  }}
                />
              </View>

              <Paper.Button
                onPress={() => {
                  setCountry(Countries.empty);
                }}
                // mode="contained"
              >
                reset country
              </Paper.Button>

              <Paper.Subheading>
                Brand
              </Paper.Subheading>

              <View
                style={styles.filterRowContainer}
              >
                <FilterRadioButtonItem
                  title="Netto"
                  value={Brands.netto}
                  status={brand === Brands.netto ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.netto);
                  }}
                />

                <FilterRadioButtonItem
                  title="Bilka"
                  value={Brands.bilka}
                  status={brand === Brands.bilka ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.bilka);
                  }}
                />

                <FilterRadioButtonItem
                  title="Foetex"
                  value={Brands.foetex}
                  status={brand === Brands.foetex ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.foetex);
                  }}
                />

                <FilterRadioButtonItem
                  title="Salling"
                  value={Brands.salling}
                  status={brand === Brands.salling ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.salling);
                  }}
                />

                <FilterRadioButtonItem
                  title="Carl's Jr"
                  value={Brands.carlsjr}
                  status={brand === Brands.carlsjr ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.carlsjr);
                  }}
                />

                <FilterRadioButtonItem
                  title="BR"
                  value={Brands.br}
                  status={brand === Brands.br ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBrand(Brands.br);
                  }}
                />
              </View>

              <Paper.Button
                onPress={() => {
                  setBrand(Brands.empty);
                }}
              >
                reset brand
              </Paper.Button>

              <Paper.Subheading>Attributes</Paper.Subheading>
              <View
                style={styles.filterRowContainer}
              >

                {/* attributes */}
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.babyChanging}
                  status={babyChanging ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBabyChanging((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.bakery}
                  status={bakery ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setBakery((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.carlsJunior}
                  status={carlsJunior ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCarlsJunior((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.enablingFacilities}
                  status={enablingFacilities ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setEnablingFacilities((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.flowers}
                  status={flowers ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setFlowers((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.garden}
                  status={garden ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setGarden((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.holidayOpen}
                  status={holidayOpen ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setHolidayOpen((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.nonFood}
                  status={nonFood ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setNonFood((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.open247}
                  status={open247 ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setOpen247((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.parking}
                  status={parking ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setParking((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.parkingRestrictions}
                  status={parkingRestrictions ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setParkingRestrictions((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.petFood}
                  status={petFood ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setPetFood((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.pharmacy}
                  status={pharmacy ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setPharmacy((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.scanAndGo}
                  status={scanAndGo ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setScanAndGo((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.starbucks}
                  status={starbucks ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setStarbucks((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.swipBox}
                  status={swipBox ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setSwipBox((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.wc}
                  status={wc ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setWc((prevState) => { return !prevState; });
                  }}
                />
                <FilterCheckBoxItem
                  title={enums.StoreAttributesNormal.wifi}
                  status={wifi ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setWifi((prevState) => { return !prevState; });
                  }}
                />
              </View>
              <Paper.Button
                onPress={setAllAttributsFalse}
              >
                reset filters
              </Paper.Button>
              {/* filters */}
            </ScrollView>
          )}
          <View
            style={styles.spacer}
          />

          {!ui.isLoading && viewMode === ViewModes.storesView && (
            <FlatList
              data={stores.storesData}
              renderItem={renderStoreItem}
              ListEmptyComponent={NoResults}
            />
          )}
          {/* show regardless of viewMode. then we show the spinner even in filterView so users see new data is fetching */}
          {ui.isLoading && (
            <Spinner />
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
