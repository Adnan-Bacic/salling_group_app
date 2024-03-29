import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';

type StatusType = 'checked' | 'unchecked' | 'indeterminate';
interface FilterCheckBoxItemInterface {
  title: string;
  status: StatusType;
  onPress: () => void;
}
const FilterCheckBoxItem: React.FunctionComponent<FilterCheckBoxItemInterface> = ({
  title, status, onPress,
}): React.ReactElement => {
  return (
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
      <View>
        <Paper.Checkbox.Android
          status={status}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '45%',
  },
  titleContainer: {
    alignSelf: 'center',
    flex: 1,
  },
});

export default FilterCheckBoxItem;
