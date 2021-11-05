import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Paper from 'react-native-paper';
import { MainTemplate } from '../../templates';

interface StoreInterface {
  route:{
    params:{
      name: string;
    }
  }
}
const Store = ({ route }: StoreInterface): React.ReactElement => {
  const { name } = route.params;
  return (
    <MainTemplate>
      <View
        style={styles.container}
      >
        <Paper.Text>
          {name}
        </Paper.Text>
      </View>
    </MainTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Store;
