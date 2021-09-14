import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Paper from 'react-native-paper';

const StoreItem = ({
  name, street, city, zip, attributes, onPress,
}) => {
  return (
    <View
      style={styles.container}
    >
      <Paper.Card>
        <Paper.Card.Title
          title={name}
          subtitle={`${street}, ${city} - ${zip}`}
        />
        <Paper.Card.Content>
          <Paper.Paragraph>Paper.Card content</Paper.Paragraph>
          {/* attributes here */}
          {attributes.carlsJunior ? (
            <Text>carlsJunior</Text>
          ) : (
            <Text>no carlsJunior</Text>
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
  container: {
    marginBottom: 20,
  },
});

export default StoreItem;
