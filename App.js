import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/app/store';

// importing the screens that are to be navigated
import Signin from './src/authScreen/Signin';
import Signup from './src/authScreen/Signup';
import Forgetpassword from './src/authScreen/Forgetpassword';
import BottomTab from './src/displayScreen/BottomTab';

import EditDetail from './src/displayScreen/EditDetail';
import PermissionScreen from './src/displayScreen/PermissionScreen';

// importing react-native-navigation tools
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// creating object of native navigator that returns {navigator,group and Screen}
const nativeStack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <nativeStack.Navigator>
          <nativeStack.Group screenOptions={{headerShown: false}}>
            <nativeStack.Screen name="signin" component={Signin} />
            <nativeStack.Screen name="signup" component={Signup} />
            <nativeStack.Screen
              name="forget-password"
              component={Forgetpassword}
            />
            <nativeStack.Screen name="bottom-tab" component={BottomTab} />
          </nativeStack.Group>
          <nativeStack.Screen
            name="edit-detail"
            component={EditDetail}
            options={{
              presentation: 'modal',
              headerTitle: 'Edit Profile',
              headerTitleAlign: 'center',
            }}
          />
          <nativeStack.Screen
            name="permission"
            component={PermissionScreen}
            options={{presentation: 'modal', headerShown: false}}
          />
        </nativeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
