import React from 'react';
import {
  View, StyleSheet, Image, Dimensions,
} from 'react-native';
import * as Paper from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export interface FoodItemBaseInterface {
  children: React.ReactElement;
  title: string;
  image: string;
  originalPrice: number;
  newPrice: number;
  percentDiscount: number;
  stock: number;
  discount: number;
  currency: string;
  stockUnit: 'kg' | 'each';
}
const FoodItemTemplate: React.FunctionComponent<FoodItemBaseInterface> = ({
  children,
  title,
  image,
}): React.ReactElement => {
  return (
    <View
      style={styles.container}
    >
      <Paper.Card>
        <Paper.Card.Title
          title={title}
          subtitle="sub"
        />
        <Paper.Card.Content>
          <Paper.Title>
            title???
          </Paper.Title>
          <Paper.Paragraph>
            Paper.Card content
          </Paper.Paragraph>
          {image && (
          <View
            style={styles.imageContainer}
          >
            <Image
              source={{ uri: image }}
              style={styles.image}
            />
          </View>
          )}
          {!image && (
          <Paper.Headline>
            No image
          </Paper.Headline>
          )}

          <Paper.Caption>
            caption
          </Paper.Caption>
          <Paper.Headline>
            headline
          </Paper.Headline>
          <Paper.Subheading>
            subheading
          </Paper.Subheading>

          {children}
        </Paper.Card.Content>
        <Paper.Card.Actions
          style={styles.actionContainer}
        >
          <Paper.Button>
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
  image: {
    height: 300,
    width: '100%',
  },
  imageContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default FoodItemTemplate;
