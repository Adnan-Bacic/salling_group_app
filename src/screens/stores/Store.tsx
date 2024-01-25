/* eslint-disable react-native/no-color-literals */
import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, FlatList, LayoutAnimation,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { MainTemplate } from 'src/templates';
import { useAppSelector } from 'src/redux/hooks';
import { storesSelector } from 'src/redux/selectors';
import { enums } from './helpers';

interface StoreInterface {
  route: {
    params: {
      id: string;
    }
  }
}
const Store: React.FunctionComponent<StoreInterface> = ({
  route,
}): React.ReactElement => {
  const stores = useAppSelector(storesSelector);

  const { id } = route.params;

  const currentStore = stores.storesData.find((store) => {
    return store.id === id;
  });

  const [filtersShown, setFiltersShown] = useState(false);
  const [hoursType, setHoursType] = useState('');
  const [currentlyFilteredItems, setCurrentlyFilteredItems] = useState(null);

  useEffect(() => {
    const setInitialData = () => {
      setCurrentlyFilteredItems(currentStore.hours);
    };

    setInitialData();
  }, [currentStore.hours]);

  useEffect(() => {
    const handleChangeHourType = () => {
      // if not null / not empty string so it doesnt run on first render
      if (currentlyFilteredItems !== null && hoursType !== '') {
        const filteredItemsByType = currentStore.hours.filter((item: any) => {
          return item.type === hoursType;
        });

        setCurrentlyFilteredItems(filteredItemsByType);
      }
    };

    handleChangeHourType();
    // dont need currentlyFilteredItems to avoid infinite re-render
  }, [hoursType]);

  const reset = () => {
    setHoursType('');
    setCurrentlyFilteredItems(currentStore.hours);
  };

  const showOpenOnly = () => {
    const openOnly = currentStore.hours.filter((item: any) => {
      return item.closed === false;
    });
    // console.log(openOnly)
    setCurrentlyFilteredItems(openOnly);
  };

  const renderItem = ({ item }: any) => {
    const hourTypeNormal = enums.hourTypesToNormal(item.type);

    return (
      <View
        style={styles.hourItemContainer}
      >
        <Paper.Text>
          {`Date: ${item.date}`}
        </Paper.Text>
        <Paper.Text>
          {`Section - ${hourTypeNormal}`}
        </Paper.Text>
        <Paper.Text
          style={item.closed ? styles.red : styles.green}
        >
          {item.closed ? (
            'Closed'
          ) : (
            'Open'
          )}
        </Paper.Text>
        {item.open && (
          <Paper.Text>
            {`Opens at: ${item.open}`}
          </Paper.Text>

        )}
        {item.close && (
          <Paper.Text>
            {`Closes at: ${item.close}`}
          </Paper.Text>
        )}
      </View>
    );
  };

  const toggleFiltersShown = () => {
    LayoutAnimation.easeInEaseOut();

    setFiltersShown((prevState) => { return !prevState; });
  };

  const FilterContent = () => {
    if (!filtersShown) {
      return null;
    }

    return (
      <>
        <View
          style={styles.chipContainer}
        >
          {Object.entries(enums.HourTypesNormal).map((type) => {
            return (
              <Paper.Chip
                selected={hoursType === type[0]}
                style={styles.chip}
                icon={hoursType === type[0] ? 'check' : 'information'}
                onPress={() => {
                  setHoursType(type[0]);
                }}
                key={type[0]}
              >
                {type[1]}
              </Paper.Chip>
            );
          })}
        </View>
        <Paper.Button
          onPress={reset}
        >
          reset type
        </Paper.Button>
        <Paper.Button
          onPress={showOpenOnly}
        >
          only show opened
        </Paper.Button>
      </>
    );
  };

  return (
    <MainTemplate>
      <View
        style={styles.container}
      >
        <Paper.Text>
          {currentStore.name}
        </Paper.Text>
        <Paper.Title>
          Opening hours
        </Paper.Title>
        <Paper.Button
          onPress={toggleFiltersShown}
        >
          {filtersShown ? (
            'Hide filters'
          ) : (
            'Show filters'
          )}
        </Paper.Button>
        <FlatList
          data={currentlyFilteredItems}
          renderItem={renderItem}
          ListHeaderComponent={<FilterContent />}
        />
      </View>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginBottom: 5,
    marginRight: 5,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
  },
  green: {
    color: 'green',
  },
  hourItemContainer: {
    marginBottom: 50,
  },
  red: {
    color: 'red',
  },
});

export default Store;
