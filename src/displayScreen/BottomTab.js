import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from './Dashboard';
import User from './User';

import Entypo from 'react-native-vector-icons/Entypo';

const bottomTab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <bottomTab.Navigator>
      <bottomTab.Group screenOptions={{headerShown: false}}>
        <bottomTab.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            title: 'Home',
            tabBarIcon: () => {
              return <Entypo name="home" color="blue" size={24} />;
            },
          }}
        />
        <bottomTab.Screen
          name="user"
          component={User}
          options={{
            title: 'User',
            tabBarIcon: () => {
              return <Entypo name="user" color="blue" size={24} />;
            },
          }}
        />
      </bottomTab.Group>
    </bottomTab.Navigator>
  );
}
