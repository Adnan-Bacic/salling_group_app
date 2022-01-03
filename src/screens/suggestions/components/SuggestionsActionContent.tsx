import React from 'react';
import {
  View, StyleSheet, Linking, Alert,
} from 'react-native';
import * as Paper from 'react-native-paper';
import * as functions from 'src/redux/functions';
import { useAppDispatch } from 'src/redux/hooks';

const SuggestionsActionContent: React.FunctionComponent<any> = ({
  item1,
}): React.ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <View
      style={styles.container}
    >
      <Paper.Button
        onPress={async () => {
          const url = item1.link;

          try {
            const res = await Linking.canOpenURL(url);

            if (!res) {
              throw new Error(`Cannot open link. If you wish to manually look up the item: ${url}`);
            }

            await Linking.openURL(url);
          } catch (err: any) {
            Alert.alert(err.name, err.message);
          }
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
