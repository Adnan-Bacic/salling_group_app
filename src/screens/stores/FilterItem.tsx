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
    </>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
});

export default FilterItem;
