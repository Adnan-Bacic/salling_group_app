import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { StoreItemTemplate } from 'src/components';
import { StoreItemBaseInterface } from 'src/components/stores/StoreItemTemplate';

interface StoreItemInterface extends StoreItemBaseInterface {
  amount: number;
}
const StoreItem: React.FunctionComponent<StoreItemInterface> = ({
  name, street, city, zip, country, amount,
  actionButton1OnPress, actionButton1Text,
}): React.ReactElement => {
  return (
    <StoreItemTemplate
      name={name}
      street={street}
      city={city}
      zip={zip}
      country={country}
      actionButton1Text={actionButton1Text}
      actionButton1OnPress={actionButton1OnPress}
    >
      <Paper.Text>
        children
      </Paper.Text>
      <Paper.Text>
        {`There are ${amount} food waste items`}
      </Paper.Text>
    </StoreItemTemplate>
  );
};

const styles = StyleSheet.create({

});

export default StoreItem;
