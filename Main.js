import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// importing the screens that are to be navigated
import Signup from './src/authScreen/Signup';
import Forgetpassword from './src/authScreen/Forgetpassword';
import BottomTab from './src/displayScreen/BottomTab';
import startingScreen from './src/authScreen/StartingScreen';

// display screen
import EditDetail from './src/displayScreen/EditDetail';
import PermissionScreen from './src/displayScreen/PermissionScreen';
import ItemScreen from './src/displayScreen/ItemScreen';
import Cart from './src/displayScreen/Cart';
import BuyNow from './src/displayScreen/BuyNow';
import LocationMaps from './src/displayScreen/LocationMaps';

// admin screen
import PostProduct from './src/AdminScreen/PostProduct';
import UpdateProduct from './src/AdminScreen/UpdateProduct';
import DeleteProduct from './src/AdminScreen/DeleteProduct';

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
            {/* starting screen */}
            <nativeStack.Screen name="starting" component={startingScreen} />
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
          {/* admin screen */}
          <nativeStack.Group screenOptions={{headerShown: false}}>
            <nativeStack.Screen name="post-product" component={PostProduct} />
            <nativeStack.Screen
              name="update-product"
              component={UpdateProduct}
            />
            {/* delete product */}
            <nativeStack.Screen
              name="delete-product"
              component={DeleteProduct}
            />
            {/* location */}
            <nativeStack.Screen name="location" component={LocationMaps} />
          </nativeStack.Group>
        </nativeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
