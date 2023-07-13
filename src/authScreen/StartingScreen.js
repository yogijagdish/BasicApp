import React from 'react';

import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function StartingScreen() {
  return (
    <SafeAreaView>
      {/* status bar */}
      <StatusBar backgroundColor="#1e40af" />
      {/* arrow and link */}
      <View className="bg-blueColor h-screen">
        <View className="flex flex-row justify-between p-4">
          <Ionicons name="chevron-back-outline" size={24} color="white" />
          <Text className="text-whiteColor opacity-80">
            {' '}
            Don't have an account?{' '}
          </Text>
        </View>
        {/* name */}
        <View className="p-16">
          <Text className="text-whiteColor text-center text-4xl"> Name </Text>
        </View>
        <View className="bg-whiteColor h-full rounded-t-3xl">
          <View className="p-8">
            <Text className="text-center text-grayColor font-bold text-2xl">
              {' '}
              Welcome Back{' '}
            </Text>
            <Text className="text-center text-sm">
              {' '}
              Enter your details below{' '}
            </Text>
          </View>
          {/* second div */}
          <View className="flex items-center gap-4">
            <TextInput
              className="border-2 w-80 rounded-xl"
              placeholder="Email Address"
            />
            <TextInput
              className="border-2 w-80 rounded-xl"
              placeholder="Password"
              secureTextEntry={true}
            />
            <TouchableOpacity className="h-14 w-80 rounded-xl bg-blueColor">
              <Text className="p-4 text-center text-whiteColor"> Sign in </Text>
            </TouchableOpacity>

            <Text className="font-bold"> Forget your password? </Text>
          </View>
          <View>
            <Text className="text-center pt-16"> Or sign in with </Text>
            <View className="p-6 flex flex-row justify-between gap-16">
              <TouchableOpacity className="flex flex-row border-2 w-32 h-10 p-2 rounded-lg">
                <Image
                  source={{
                    uri: 'https://icon2.cleanpng.com/20180419/hkq/kisspng-google-logo-google-search-google-account-redes-5ad81f9d48aa16.8210485215241133092976.jpg',
                  }}
                  className="h-4 w-6"
                  resizeMode="contain"
                />
                <Text className="font-bold text-grayColor"> Google</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row border-2 w-32 h-10 p-2 rounded-lg">
                <Image
                  source={{
                    uri: 'https://i.pinimg.com/474x/f7/99/20/f79920f4cb34986684e29df42ec0cebe.jpg',
                  }}
                  className="h-6 w-8"
                  resizeMode="contain"
                />
                <Text className="font-bold text-grayColor"> Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
