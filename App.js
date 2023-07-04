import React from 'react';

// importing the screens that are to be navigated
import Signin from './src/authScreen/Signin';
import Signup from './src/authScreen/Signup';
import Forgetpassword from './src/authScreen/Forgetpassword';
import BottomTab from './src/displayScreen/BottomTab';
import EditDetail from './src/displayScreen/EditDetail';

// importing react-native-navigation tools
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// creating object of native navigator that returns {navigator,group and Screen}
const nativeStack = createNativeStackNavigator();

export default function App() {
  return (
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
      </nativeStack.Navigator>
    </NavigationContainer>
  );
}
