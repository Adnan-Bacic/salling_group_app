import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';

interface FilterItemInterface {
  title: string;
  status: string;
  onPress: () => void;
}
const FilterItem = ({ title, status, onPress }: FilterItemInterface): React.ReactElement => {
  return (
    <>
    <View style={styles.container}>
      <View
        style={styles.titleContainer}
      >
        <Paper.Text>
          {title}
        </Paper.Text>

      </View>
      <View
        style={styles.checkboxContainer}
      >
        <Paper.Checkbox
          status={status}
          onPress={onPress}
        />
      </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    width: '45%',
    //backgroundColor: 'red',
  },
  checkboxContainer: {
    //flex: 3,
  },
  titleContainer: {
    alignSelf: 'center',
    flex: 1,
  },
});

export default FilterItem;
