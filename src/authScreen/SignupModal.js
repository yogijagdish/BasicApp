import React from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SignupModal({isSignupVisible}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      animationDuration={5000}
      visible={isSignupVisible}>
      <TouchableOpacity className="p-4">
        {/* back button */}
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </TouchableOpacity>
      <View className="flex-1 justify-end h-1/4">
        <View className="h-3/4 bg-whiteColor rounded-t-3xl">
          <Text className="text-3xl text-grayColor mt-6 text-center font-bold">
            {' '}
            Sign Up{' '}
          </Text>
          <Text className="text-center text-lg text-grayColor mt-2">
            {' '}
            Register yourself here{' '}
          </Text>
          <View className="flex items-center gap-4 pt-6">
            {/* username */}
            <TextInput
              className="border-2 rounded-2xl w-80"
              placeholder="Enter your username"
            />
            {/* email address */}
            <TextInput
              className="border-2 rounded-2xl w-80"
              placeholder="Enter your Email Address"
            />
            {/* password */}
            <TextInput
              className="border-2 rounded-2xl w-80"
              placeholder="Enter your password here"
            />
            {/* sign up button */}
            <TouchableOpacity className="h-14 w-80 rounded-xl bg-blueColor">
              <Text className="p-4 text-center text-whiteColor"> Sign in </Text>
            </TouchableOpacity>
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
    </Modal>
  );
}
