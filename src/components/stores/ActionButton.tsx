import React from 'react';
import * as Paper from 'react-native-paper';

interface ActionButtonInterface {
  children: string;
  onPress: () => void;
}
const ActionButton: React.FunctionComponent<ActionButtonInterface> = ({
  children, onPress,
}): React.ReactElement => {
  return (
    <Paper.Button
      onPress={onPress}
    >
      {children}
    </Paper.Button>
  );
};

export default ActionButton;
