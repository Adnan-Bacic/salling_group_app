import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainTemplate = ({ children }) => {
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
