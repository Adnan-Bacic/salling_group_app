import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { links } from 'src/utility';

const SuggestionsActionContent: React.FunctionComponent<any> = ({
  navigation, item1,
}): React.ReactElement => {
  return (
    <View
      style={styles.container}
    >
      <Paper.Button
        onPress={() => {
          const url = item1.link;

          links.linkOpener(url);
        }}
      >
        open bilkatogo.dk
      </Paper.Button>
      <Paper.Button
        onPress={() => {
          navigation.navigate('SimilarProducts', {
            id: item1.prod_id,
          });
        }}
      >
        similar products
      </Paper.Button>
      <Paper.Button
        onPress={() => {
          navigation.navigate('FrequentlyBoughtTogehter', {
            id: item1.prod_id,
          });
        }}
      >
        frequently bought togehter
      </Paper.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default SuggestionsActionContent;
