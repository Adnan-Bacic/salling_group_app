import React from 'react';
import { Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Screens from '../screens'

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else {
              iconName = 'else'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
          //return <Text>{iconName}</Text>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Test" component={Screens.Test} />
      <Tab.Screen name="Test2" component={Screens.Test2} />
    </Tab.Navigator>
  );
}

export default BottomNavigator
