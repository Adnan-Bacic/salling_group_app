import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';

interface FilterRadioButtonItemInterface {
  title: string;
  status: string;
  onPress: () => void;
}
const FilterRadioButtonItem = ({ title, status, onPress }: FilterRadioButtonItemInterface): React.ReactElement => {
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
          style={styles.radioButtonContainer}
        >
          <Paper.RadioButton
            status={status}
            onPress={onPress}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    radioButtonContainer: {
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

export default FilterRadioButtonItem;
