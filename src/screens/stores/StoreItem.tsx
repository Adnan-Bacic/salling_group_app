import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Paper from 'react-native-paper';

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
          <Paper.Paragraph>Paper.Card content</Paper.Paragraph>
          <View
            style={styles.chipContainer}
          >
            {Object.keys(attributes).map((item) => {
              return (
                <Paper.Chip
                  key={item}
                  icon="information"
                  style={styles.chip}
                >
                  {item}
                </Paper.Chip>
              );
            })}
          </View>
          <View>
            <Paper.Text>
              open smiley?
            </Paper.Text>
          </View>
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
