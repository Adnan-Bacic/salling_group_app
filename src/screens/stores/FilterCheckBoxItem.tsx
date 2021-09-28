import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';

interface FilterCheckBoxItemInterface {
  title: string;
  value: string;
  status: string;
  onPress: () => void;
}
const FilterCheckBoxItem = ({ title, value, status, onPress }: FilterCheckBoxItemInterface): React.ReactElement => {
  return (
    <>
      <View
        style={styles.container}
      >
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
            value={value}
            status={status}
            onPress={onPress}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    //flex: 3,
  },
  container: {
    flexDirection: 'row',
    width: '45%',
    // backgroundColor: 'red',
  },
  titleContainer: {
    alignSelf: 'center',
    flex: 1,
  },
});

export default FilterCheckBoxItem;
