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
  name, street, city, zip, country, attributes, onPress, onPressSmileyScheme,
}: StoreItemInterface): React.ReactElement => {
  //console.log(attributes)
  //console.log('keys', Object.keys(attributes))
  //console.log('entires', Object.entries(attributes))
  //console.log('values', Object.values(attributes))
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
            {Object.entries(attributes).map((item) => {
              console.log(item, item[0])
              const isParkingRestrictionsAttribute = item[0] === 'parkingRestrictions'
              console.log('t', isParkingRestrictionsAttribute)

              let attribute
              if(isParkingRestrictionsAttribute){
                attribute = enums.StoreAttributesNormalParking.parkingRestrictions;
              } else {
                attribute = enums.StoreAttributesToNormal(item[0]);
              }
              const attributeIsTrue = item[1] === true
              //console.log(attributeIsTrue)

              return(
                <>
                {/* smiley scheme is a string, so only show boolean */}
                {typeof item[1] === 'boolean' && (
                <Paper.Chip
                key={item}
                icon={attributeIsTrue ? 'check' : 'block-helper'}
                style={styles.chip}
              >
                {attribute}
              </Paper.Chip>
                )}
                </>
              )
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
