import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import * as Paper from 'react-native-paper';
import { StoreItemTemplate } from 'src/components';
import * as enums from './enums';

interface StoreItemInterface {
  name: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  attributes: Record<string, unknown>
  onPressAction: () => void;
  onPressSmileyScheme: () => void;
}
const StoreItem: React.FunctionComponent<StoreItemInterface> = ({
  name, street, city, zip, country, attributes, onPressAction, onPressSmileyScheme,
}): React.ReactElement => {
  return (
    <StoreItemTemplate
      name={name}
      street={street}
      city={city}
      zip={zip}
      country={country}
      onPressAction={onPressAction}
    >
      <View
        style={styles.chipContainer}
      >
        {Object.entries(attributes).map((item) => {
          const isParkingRestrictionsAttribute = item[0] === 'parkingRestrictions';

          let attribute;
          if (isParkingRestrictionsAttribute) {
            attribute = enums.StoreAttributesNormalParking.parkingRestrictions;
          } else {
            attribute = enums.StoreAttributesToNormal(item[0]);
          }
          const attributeIsTrue = item[1] === true;

          return (
            <>
              {/* smiley scheme is a string, so only show boolean */}
              {typeof item[1] === 'boolean' && (
              <Paper.Chip
                icon={attributeIsTrue ? 'check' : 'block-helper'}
                style={styles.chip}
              >
                {attribute}
              </Paper.Chip>
              )}
            </>
          );
        })}

      </View>
      {attributes.smileyscheme && (
      <View>
        <Paper.Text
          onPress={onPressSmileyScheme}
        >
          Open smiley scheme
        </Paper.Text>
      </View>
      )}
    </StoreItemTemplate>
  );
};

const styles = StyleSheet.create({
  chip: {
    marginBottom: 5,
    marginRight: 5,
  },
  chipContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default StoreItem;
