import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Linking,
  Alert,
  ScrollView, FlatList, LayoutAnimation,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { uiSelector, storesSelector } from 'src/redux/selectors';
import * as functions from 'src/redux/functions';
import { MainTemplate } from 'src/templates';
import { Spinner, NoResults } from 'src/components';
import { enums } from './helpers';
import { StoreItem, FilterRadioButtonItem, FilterCheckBoxItem } from './components';

interface StoresInterface {
  navigation: any
}

const Stores: React.FunctionComponent<StoresInterface> = ({
  navigation,
}): React.ReactElement => {
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

  const stores = useAppSelector(storesSelector);
  const ui = useAppSelector(uiSelector);

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
  }, [
    babyChanging, bakery, brand, carlsJunior, city, country, dispatch,
    enablingFacilities, flowers, garden, holidayOpen, parkingRestrictions,
    nonFood, open247, parking, petFood, pharmacy, scanAndGo, starbucks,
    street, swipBox, wc, wifi, zip,
  ]);

  const renderStoreItem = ({ item }: FlatListItemProps) => {
    const ActionContent = ({ item }) => {
      return(
        <Paper.Button onPress={() => {
          navigation.navigate('Store', {
            name: item.name,
            id: item.id,
          });
        }}>store</Paper.Button>
      )
    }
    // TODO: handle br - not a food chain
    return (
      <StoreItem
        name={item.name}
        street={item.address.street}
        city={item.address.city}
        zip={item.address.zip}
        country={item.address.country}
        attributes={item.attributes}
        actionContent={<ActionContent item={item}></ActionContent>}
        onPressSmileyScheme={async () => {
          const url = `https://www.findsmiley.dk/${item.attributes.smileyscheme}`;

          try {
            const res = await Linking.canOpenURL(url);

            if (!res) {
              throw new Error(`Cannot open link. If you wish to manually look up the smiley scheme: ${url}`);
            }

            await Linking.openURL(url);
          } catch (err: any) {
            Alert.alert(err.name, err.message);
          }
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

  const scrollRef = useRef<any>();

  const scrollToTop = () => {
    /*
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
    */

    scrollRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  const switchViewMode = () => {
    LayoutAnimation.easeInEaseOut();

    if (viewMode === ViewModes.storesView) {
      setViewMode(ViewModes.filterView);
    } else {
      setViewMode(ViewModes.storesView);
    }
  };

  const FilterViewContent = () => {
    // return nothing if user isent toggling to show filters
    if (viewMode !== ViewModes.filterView) {
      return null;
    }

    return (
      <View>
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
          maxLength={6}
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

        <Paper.Subheading>
          Country
        </Paper.Subheading>

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

        <Paper.Subheading>
          Attributes
        </Paper.Subheading>
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
        </View>
    );
  };

  const StoresActionContent = ({ item }: any) => {
    return (
      <Paper.Button
        onPress={() => {
          navigation.navigate('Store', {
            name: item.name,
            id: item.id,
          });
        }}
      >
        See more
      </Paper.Button>
    );
  };

  return (
    <MainTemplate>
      <>
        <Paper.Button
          onPress={switchViewMode}
        >
          {viewMode === ViewModes.storesView ? (
            'Show filters'
          ) : (
            'Hide filters'
          )}
        </Paper.Button>

        <View
          style={styles.spacer}
        />

        {/*
          its important to only render certain props depending on ui.isLoading
          to have the correct ui elements show
          */}
        <FlatList
          ref={scrollRef}
          data={!ui.isLoading ? stores.storesData : []}
          renderItem={!ui.isLoading ? renderStoreItem : null}
          ListEmptyComponent={ui.isLoading === false ? NoResults : null}
          ListHeaderComponent={FilterViewContent}
          ListFooterComponent={ui.isLoading && Spinner}
          keyExtractor={(item) => {
            return item.id;
          }}
        />

        <Paper.Button
          onPress={scrollToTop}
        >
          scroll to top
        </Paper.Button>
      </>
    </MainTemplate>
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
