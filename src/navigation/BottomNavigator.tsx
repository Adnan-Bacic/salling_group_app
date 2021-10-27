import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import * as StackNavigator from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = (): React.ReactElement => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: () => {
          const renderTabBarIcon = () => {
            // return <Text>123</Text>;
            const iconName = 'heart';
            return (
              <Ionicons
                name={iconName}
                size={20}
                color="red"
              />
            );
          };

          return renderTabBarIcon();
        },
      }}
    >
      <Tab.Screen
        name="StoresNavigator"
        component={StackNavigator.StoresNavigator}
      />
      <Tab.Screen
        name="StackNavigator1"
        component={StackNavigator.StackNavigator1}
      />
      <Tab.Screen
        name="StackNavigator2"
        component={StackNavigator.StackNavigator2}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
