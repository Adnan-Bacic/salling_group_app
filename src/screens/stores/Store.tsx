import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Paper from 'react-native-paper';
import { MainTemplate } from 'src/templates';

interface StoreInterface {
  route:{
    params:{
      name: string;
    }
  }
}
const Store: React.FunctionComponent<StoreInterface> = ({
  route,
}): React.ReactElement => {
  const { name, id } = route.params;
  // console.log(id);
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
