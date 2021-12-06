import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import * as Paper from 'react-native-paper';

const NoResults: React.FunctionComponent = (): React.ReactElement => {
  return (
    <View
      style={styles.container}
    >
      <Paper.Title>
        No results found
      </Paper.Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default NoResults;
