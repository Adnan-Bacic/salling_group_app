import React from 'react';
import { Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Screens from '../screens'
import * as StackNavigator from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarIcon: () => {
        const iconName = 'heart'
        return <Ionicons name={iconName} size={20} color="red" />;
      }
    }}
    >
    <Tab.Screen name="StackNavigator1" component={StackNavigator.StackNavigator1}></Tab.Screen>
    <Tab.Screen name="StackNavigator2" component={StackNavigator.StackNavigator2}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomNavigator
