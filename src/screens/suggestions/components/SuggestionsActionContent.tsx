import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import * as functions from 'src/redux/functions';
import { useAppDispatch } from 'src/redux/hooks';
import { links } from 'src/utility';

const SuggestionsActionContent: React.FunctionComponent<any> = ({
  item1,
}): React.ReactElement => {
  const dispatch = useAppDispatch();

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
          dispatch(functions.suggestions.getSimilarProducts(item1.prod_id));
        }}
      >
        similar products
      </Paper.Button>
      <Paper.Button
        onPress={() => {
          dispatch(functions.suggestions.getFrequentlyBoughtTogehter(item1.prod_id));
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
