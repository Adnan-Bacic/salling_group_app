import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';

export interface StoreItemBaseInterface {
  children: React.ReactElement;
  name: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  actionContent: React.ReactElement;
}
const StoreItemTemplate: React.FunctionComponent<StoreItemBaseInterface> = ({
  children, name, street, city, zip, country,
  actionContent,
}): React.ReactElement => {
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
          <Paper.Title>
            title???
          </Paper.Title>
          <Paper.Paragraph>
            Paper.Card content
          </Paper.Paragraph>

          {children}
        </Paper.Card.Content>
        <Paper.Card.Actions
          style={styles.actionContainer}
        >
          {actionContent}
        </Paper.Card.Actions>
      </Paper.Card>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    // button position
    alignSelf: 'center',
  },
  container: {
    marginBottom: 20,
  },
});

export default StoreItemTemplate;
