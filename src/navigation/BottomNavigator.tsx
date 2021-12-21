import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import StoresNavigator from './StoresNavigator';
import AntiFoodWasteNavigator from './AntiFoodWasteNavigator';
import SuggestionsNavigator from './SuggestionsNavigator';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator: React.FunctionComponent = (): React.ReactElement => {
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
        component={StoresNavigator}
        options={{
          tabBarLabel: 'Stores'
        }}
      />
      <Tab.Screen
        name="AntiFoodWasteNavigator"
        component={AntiFoodWasteNavigator}
        options={{
          tabBarLabel: 'Anti Food Waste',  
        }}
      />
      <Tab.Screen
        name="SuggestionsNavigator"
        component={SuggestionsNavigator}
        options={{
          tabBarLabel: 'Suggestions'
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
