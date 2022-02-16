import React from 'react';
import * as Paper from 'react-native-paper';
import { StoreItemTemplate, StoreItemBaseInterface } from 'src/components';

interface StoreItemInterface extends StoreItemBaseInterface {
  amount: number;
}
const StoreItem: React.FunctionComponent<StoreItemInterface> = ({
  name, street, city, zip, country, amount,
  actionContent,
}): React.ReactElement => {
  return (
    <StoreItemTemplate
      name={name}
      street={street}
      city={city}
      zip={zip}
      country={country}
      actionContent={actionContent}
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

export default StoreItem;
