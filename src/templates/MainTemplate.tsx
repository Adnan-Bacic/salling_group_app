import React from 'react';
import { View, StyleSheet } from 'react-native';

interface MainTemplateInterface {
  children: React.ReactNode;
}
const MainTemplate: React.FunctionComponent<MainTemplateInterface> = ({
  children,
}): React.ReactElement => {
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
    paddingTop: 20,
  },
});

export default MainTemplate;
