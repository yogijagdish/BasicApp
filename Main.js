import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// importing the screens that are to be navigated
import Signin from './src/authScreen/Signin';
import Signup from './src/authScreen/Signup';
import Forgetpassword from './src/authScreen/Forgetpassword';
import BottomTab from './src/displayScreen/BottomTab';

import EditDetail from './src/displayScreen/EditDetail';
import PermissionScreen from './src/displayScreen/PermissionScreen';
import ItemScreen from './src/displayScreen/ItemScreen';
import Cart from './src/displayScreen/Cart';
import BuyNow from './src/displayScreen/BuyNow';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// creating object of native navigator that returns {navigator,group and Screen}
const nativeStack = createNativeStackNavigator();

// importing react-native-navigation tools
import {NavigationContainer} from '@react-navigation/native';

export default function Main() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <nativeStack.Navigator>
          <nativeStack.Group screenOptions={{headerShown: false}}>
            {/* signin */}
            <nativeStack.Screen name="signin" component={Signin} />
            {/* signup */}
            <nativeStack.Screen name="signup" component={Signup} />
            {/* forget password */}
            <nativeStack.Screen
              name="forget-password"
              component={Forgetpassword}
            />
            {/* bottom tab or dashboard */}
            <nativeStack.Screen name="bottom-tab" component={BottomTab} />
          </nativeStack.Group>
          {/* edit details */}
          <nativeStack.Screen
            name="edit-detail"
            component={EditDetail}
            options={{
              presentation: 'modal',
              headerTitle: 'Edit Profile',
              headerTitleAlign: 'center',
            }}
          />
          {/* permissions */}
          <nativeStack.Screen
            name="permission"
            component={PermissionScreen}
            options={{presentation: 'modal', headerShown: false}}
          />
          {/* item screen */}
          <nativeStack.Screen
            name="item-screen"
            component={ItemScreen}
            options={{presentation: 'modal', headerShown: false}}
          />
          {/* cart */}
          <nativeStack.Screen
            name="cart"
            component={Cart}
            options={{presentation: 'modal', headerShown: false}}
          />
          {/* buynow */}
          <nativeStack.Screen
            name="buy-now"
            component={BuyNow}
            options={{presentation: 'modal', headerShown: false}}
          />
        </nativeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
