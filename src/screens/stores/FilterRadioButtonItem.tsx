import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';

type StatusType = 'checked' | 'unchecked';
interface FilterRadioButtonItemInterface {
  title: string;
  status: StatusType;
  value: string;
  onPress: () => void;
}
const FilterRadioButtonItem = ({
  title, status, value, onPress,
}: FilterRadioButtonItemInterface): React.ReactElement => {
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
        <View>
          <Paper.RadioButton.Android
            status={status}
            value={value}
            onPress={onPress}
          />
        </View>
      </View>
    </>
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

export default FilterRadioButtonItem;
