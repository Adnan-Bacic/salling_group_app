import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';

export interface FoodItemBaseInterface {
  children: any;
}
const FoodItemTemplate = ({
  children,
}: FoodItemBaseInterface): React.ReactElement => {
  return (
    <View
      style={styles.container}
    >
        {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default FoodItemTemplate;
