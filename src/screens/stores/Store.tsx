import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import * as Paper from 'react-native-paper';
import { MainTemplate } from 'src/templates';
import { enums } from './helpers';

interface StoreInterface {
  route:{
    params:{
      name: string;
      id: string;
      hours: any;
    }
  }
}
const Store: React.FunctionComponent<StoreInterface> = ({
  route,
}): React.ReactElement => {
  const { name, id, hours } = route.params;

  const [hourType, setHourType] = useState('');
  const [ndata, setnData] = useState(null);

  useEffect(() => {
    const setInitialData = () => {
      setnData(hours);
    };

    setInitialData();
    // empty array or params makes no difference
  }, [hours]);

  useEffect(() => {
    const handleChangeHourType = () => {
      if (ndata !== null && hourType !== '') {
        const test = hours.filter((item: any) => { return item.type === hourType; });
        setnData(test);
      }
    };

    handleChangeHourType();
    // dont need nData to avoid infinite re-render
  }, [hourType, hours]);

  const reset = () => {
    setHourType('');
    setnData(hours)
  }

  const renderItem = ({ item }: any) => {
    return (
      <View
        style={styles.hourItemContainer}
      >
        <Paper.Text>
          {item.date}
        </Paper.Text>
        <Paper.Text>
          {item.type}
        </Paper.Text>
        <Paper.Text>
          {item.closed.toString()}
        </Paper.Text>
        <Paper.Text>
          {item.open}
        </Paper.Text>
        <Paper.Text>
          {item.close}
        </Paper.Text>
      </View>
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
        <Paper.Text>
          {id}
        </Paper.Text>
        <Paper.Title>
          Opening hours
        </Paper.Title>
        <View
          style={styles.chipContainer}
        >
          {Object.entries(enums.HourTypes).map((type) => {
            return (
              <Paper.Chip
                selected={hourType === type[0]}
                style={styles.chip}
                icon={hourType === type[0] ? 'check' : 'information'}
                onPress={() => {
                  setHourType(type[0]);
                }}
                key={type[0]}
              >
                {type[1]}
              </Paper.Chip>
            );
          })}
          <Paper.Button
            onPress={reset}
          >
            reset
          </Paper.Button>
        </View>
        <FlatList
          data={ndata}
          renderItem={renderItem}
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
