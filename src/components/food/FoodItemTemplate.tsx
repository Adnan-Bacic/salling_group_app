import React from 'react';
import {
  View, StyleSheet, Image,
} from 'react-native';
import * as Paper from 'react-native-paper';

export interface FoodItemBaseInterface {
  children: any;
  title: any;
  image: any;
  originalPrice: any;
  newPrice: any;
  percentDiscount: any;
  stock: any;
  discount: any;
  currency: any;
  stockUnit: any;
}
const FoodItemTemplate = ({
  children,
  title,
  image,
  originalPrice,
  newPrice,
  percentDiscount,
  stock,
  discount,
  currency,
  stockUnit,
}: FoodItemBaseInterface): React.ReactElement => {
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
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
          )}
          {!image && (
          <Paper.Headline>
            No image
          </Paper.Headline>
          )}

          <Paper.Subheading>
            Info
          </Paper.Subheading>
          <Paper.Text>
            {`original price: ${originalPrice} ${currency}`}
          </Paper.Text>
          <Paper.Text>
            {`new price: ${newPrice} ${currency}`}
          </Paper.Text>
          <Paper.Text>
            {`percent discount ${percentDiscount}%`}
          </Paper.Text>
          <Paper.Text>
            {`stock: ${stock} ${stockUnit === 'kg' ? 'kg' : 'each'}`}
          </Paper.Text>
          <Paper.Text>
            {`discount ${discount} ${currency}`}
          </Paper.Text>

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
});

export default FoodItemTemplate;
