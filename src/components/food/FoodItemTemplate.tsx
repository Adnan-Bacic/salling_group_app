import React from 'react';
import {
  View, StyleSheet, Image
} from 'react-native';
import * as Paper from 'react-native-paper';

export interface FoodItemBaseInterface {
  children: any;
  title: any;
}
const FoodItemTemplate = ({
  children,
  title,
  image
}: FoodItemBaseInterface): React.ReactElement => {
  if(image !== null){
      //console.log('size', Image.getSize(image, (w, h) => console.log(w,h)))
  }

  return (
    <View
      style={styles.container}
    >
              <Paper.Card>
        <Paper.Card.Title
          title={title}
          subtitle={'sub'}
        />
        <Paper.Card.Content>
          <Paper.Title>
            title???
          </Paper.Title>
          <Paper.Paragraph>
            Paper.Card content
          </Paper.Paragraph>
      {image && (
        <Image source={{ uri: image }} style={styles.image}></Image>
      )}
      {!image && (
        <Paper.Text>No image</Paper.Text>
      )}

          {children}
        </Paper.Card.Content>
        <Paper.Card.Actions
          style={styles.actionContainer}
        >
          <Paper.Button
           // onPress={}
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
  container: {
    marginBottom: 20,
  },
  image:{
    width: '100%',
    height: 200,
  }
});

export default FoodItemTemplate;
