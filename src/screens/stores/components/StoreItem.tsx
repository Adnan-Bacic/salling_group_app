import React, { Fragment } from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { StoreItemTemplate, StoreItemBaseInterface } from 'src/components';
import { enums } from '../helpers';

interface StoreItemInterface extends StoreItemBaseInterface {
  attributes: Record<string, unknown>;
}
const StoreItem: React.FunctionComponent<StoreItemInterface> = ({
  name, street, city, zip, country, attributes,
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
      <View
        style={styles.chipContainer}
      >
        {Object.entries(attributes).map((item: any) => {
          const isParkingRestrictionsAttribute = item[0] === 'parkingRestrictions';

          let attribute;
          if (isParkingRestrictionsAttribute) {
            attribute = enums.StoreAttributesNormalParking.parkingRestrictions;
          } else {
            attribute = enums.StoreAttributesToNormal(item[0]);
          }
          const attributeIsTrue = item[1] === true;

          return (
            <Fragment
              key={item[0]}
            >
              {/* smiley scheme is a string, so only show boolean */}
              {typeof item[1] === 'boolean' && (
              <Paper.Chip
                icon={attributeIsTrue ? 'check' : 'block-helper'}
                style={styles.chip}
              >
                {attribute}
              </Paper.Chip>
              )}
            </Fragment>
          );
        })}

      </View>
    </StoreItemTemplate>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginBottom: 5,
    marginRight: 5,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default StoreItem;
