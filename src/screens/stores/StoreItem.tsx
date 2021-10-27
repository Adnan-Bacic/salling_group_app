import React from 'react';
import {
  View, StyleSheet, Linking, Alert,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { enums } from '../../helpers';

interface StoreItemInterface {
  name: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  attributes: Record<string, unknown>
  onPress: () => void;
}
const StoreItem = ({
  name, street, city, zip, country, attributes, onPress,
}: StoreItemInterface): React.ReactElement => {
  return (
    <View
      style={styles.container}
    >
      <Paper.Card>
        <Paper.Card.Title
          title={name}
          subtitle={`${street}, ${city} - ${zip} - ${country}`}
        />
        <Paper.Card.Content>
          <Paper.Paragraph>
            Paper.Card content
          </Paper.Paragraph>
          <View
            style={styles.chipContainer}
          >
            {Object.keys(attributes).map((item) => {
              const attribute = enums.StoreAttributesToNormal(item);
              // console.log(item, attribute);
              return (
                <Paper.Chip
                  key={item}
                  icon="information"
                  style={styles.chip}
                >
                  {attribute}
                </Paper.Chip>
              );
            })}
          </View>
          {attributes.smileyscheme && (
            <View>
              <Paper.Text
                onPress={async () => {
                  const url = `https://www.findsmiley.dk/${attributes.smileyscheme}`;
                  console.log('url', url);
                  try {
                    const res = await Linking.canOpenURL(url);
                    console.log('res', res);
                    if (res) {
                      console.log(1);
                    } else {
                      console.log(2);
                    }

                    if (!await Linking.canOpenURL(url)) {
                      throw new Error(`Cannot open URL. If you wish to manually look up the smiley scheme: ${url}`);
                    }
                    await Linking.openURL(url);
                  } catch (err: any) {
                    console.log('err', err);
                    Alert.alert(err.name, err.message);
                  }
                }}
              >
                Open smiley scheme
              </Paper.Text>
            </View>
          )}
        </Paper.Card.Content>
        <Paper.Card.Actions
          style={styles.actionContainer}
        >
          <Paper.Button
            onPress={onPress}
          >
            see more
          </Paper.Button>
        </Paper.Card.Actions>
      </Paper.Card>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    alignSelf: 'flex-end',
  },
  chip: {
    marginBottom: 5,
    marginRight: 5,
  },
  chipContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    marginBottom: 20,
  },
});

export default StoreItem;
