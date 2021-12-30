import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { foodWasteSelector } from 'src/redux/selectors';
import { MainTemplate } from 'src/templates';

const AntiFoodWasteId = ({ route }) => {
    console.log('params', route.params)
  const foodWaste = useSelector(foodWasteSelector);
  console.log('items', foodWaste?.foodItemsId);
  return (
    <MainTemplate>
      <Text>
        123
      </Text>
    </MainTemplate>
  );
};

export default AntiFoodWasteId;
