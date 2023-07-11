import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from './Dashboard';
import User from './User';
import SearchProduct from './SearchProduct';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
              return <Entypo name="home" color="#FA8E00" size={24} />;
            },
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'black',
          }}
        />
        <bottomTab.Screen
          name="search-product"
          component={SearchProduct}
          options={{
            title: 'Search',
            tabBarIcon: () => {
              return <Ionicons name="search" color="#FA8E00" size={24} />;
            },
          }}
        />
        <bottomTab.Screen
          name="user"
          component={User}
          options={{
            title: 'User',
            tabBarIcon: () => {
              return <Entypo name="user" color="#FA8E00" size={24} />;
            },
          }}
        />
      </bottomTab.Group>
    </bottomTab.Navigator>
  );
}
