import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import ActionButton from './ActionButton';

export interface StoreItemBaseInterface {
  children: any;
  name: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  actionButton1OnPress: () => void;
  actionButton1Text: string;
}
const StoreItemTemplate: React.FunctionComponent<StoreItemBaseInterface> = ({
  children, name, street, city, zip, country,
  actionButton1OnPress, actionButton1Text,
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
          {actionButton1Text && (
          <ActionButton
            onPress={actionButton1OnPress}
          >
            {actionButton1Text}
          </ActionButton>
          )}
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

export default StoreItemTemplate;
