import React from 'react';
import {
  View, StyleSheet, Image,
} from 'react-native';
import * as Paper from 'react-native-paper';

export interface FoodItemBaseInterface {
  children: React.ReactNode;
  actionContent: React.ReactElement;
  title: string;
  image: string;
}
const FoodItemTemplate: React.FunctionComponent<FoodItemBaseInterface> = ({
  children,
  actionContent,
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
              resizeMode="contain"
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
  image: {
    height: 300,
    width: '100%',
  },
  imageContainer: {
    // backgroundColor: 'red',
    flex: 1,
  },
});

export default FoodItemTemplate;
