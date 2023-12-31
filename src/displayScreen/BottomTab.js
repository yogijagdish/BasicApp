import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from './Dashboard';
import User from './User';
import SearchProduct from './SearchProduct';
import Admin from '../AdminScreen/Admin';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useSelector} from 'react-redux';

const bottomTab = createBottomTabNavigator();

export default function BottomTab() {
  const user = useSelector(state => state.data.title);

  return (
    <SafeAreaProvider>
      <bottomTab.Navigator>
        <bottomTab.Group
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'black',
          }}>
          {/* dashboard */}
          <bottomTab.Screen
            name="dashboard"
            component={Dashboard}
            options={{
              title: 'Home',
              tabBarIcon: () => {
                return <Entypo name="home" color="#FA8E00" size={24} />;
              },
            }}
          />
          {/* search product */}
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
          {/* user */}
          <bottomTab.Screen
            name="user"
            component={User}
            options={{
              title: user,
              tabBarIcon: () => {
                return <Entypo name="user" color="#FA8E00" size={24} />;
              },
            }}
          />
          {/* admin pannel */}
          <bottomTab.Screen
            name="Admin"
            component={Admin}
            options={{
              title: 'Admin',
              tabBarIcon: () => {
                return (
                  <MaterialIcons
                    name="admin-panel-settings"
                    color="#FA8E00"
                    size={24}
                  />
                );
              },
            }}
          />
        </bottomTab.Group>
      </bottomTab.Navigator>
    </SafeAreaProvider>
  );
}
