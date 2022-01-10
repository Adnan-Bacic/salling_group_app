import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, FlatList, LayoutAnimation,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { MainTemplate } from 'src/templates';
import { enums } from './helpers';

interface StoreInterface {
  route:{
    params:{
      name: string;
      hours: any;
    }
  }
}
const Store: React.FunctionComponent<StoreInterface> = ({
  route,
}): React.ReactElement => {
  const { name, hours } = route.params;

  const [filtersShown, setFiltersShown] = useState(false);
  const [hoursType, setHoursType] = useState('');
  const [currentlyFilteredItems, setCurrentlyFilteredItems] = useState(null);

  useEffect(() => {
    const setInitialData = () => {
      setCurrentlyFilteredItems(hours);
    };

    setInitialData();
    // empty array or params makes no difference
  }, [hours]);

  useEffect(() => {
    const handleChangeHourType = () => {
      console.log(1);
      // if not null / not empty string so it doesnt run on first render
      if (currentlyFilteredItems !== null && hoursType !== '') {
        const filteredItemsByType = hours.filter((item: any) => {
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
    setCurrentlyFilteredItems(hours);
  };

  const showOpenOnly = () => {
    const openOnly = hours.filter((item: any) => {
      return item.closed === false;
    });
    // console.log(openOnly)
    setCurrentlyFilteredItems(openOnly);
  };

  const renderItem = ({ item }: any) => {
    //console.log('item', item?.customerFlow)
    const hourTypeNormal = enums.hourTypesToNormal(item.type);


  const t = hours.forEach(el => {
    
    //can be empty
    if(el.customerFlow){
      //console.log(el.customerFlow)
    }
  });
  //console.log(t)

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
          style={{
            color: item.closed ? 'red' : 'green',
          }}
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

        {item.customerFlow && (
          <>
          <Paper.Text>Expected customer flow</Paper.Text>
          {item.customerFlow.map((item1) => {
            console.log('item1', item1)
            return(
              <>

              <View style={{
                //flex: 1,
                width: 1,
    height: 1,
                backgroundColor: 'red',
                flexDirection: "row",
    flexWrap: "wrap",
              }}>

              </View>
              </>
            )
          })}
          </>
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
          {name}
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
  hourItemContainer: {
    marginBottom: 50,
  },
});

export default Store;
