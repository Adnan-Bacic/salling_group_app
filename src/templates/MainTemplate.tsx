import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

interface MainTemplateInterface {
  children: React.ReactElement;
}
const MainTemplate = ({ children }: MainTemplateInterface): React.ReactElement => {
  return (
    <View
      style={styles.container}
    >
      {children}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default MainTemplate;
