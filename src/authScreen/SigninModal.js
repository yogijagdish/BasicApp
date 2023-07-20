import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

// import StartingModal from './StartingModal';
import SignupModal from './SignupModal';

export default function SigninModal({isLoginVisible}) {
  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        animationDuration={5000}
        visible={isLoginVisible}>
        <View className="flex flex-row justify-between p-4 bg-opacity-50">
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </TouchableOpacity>
          {/* singup page redirect */}
          <TouchableOpacity
            onPress={() => {
              
            }}>
            <Text className="text-whiteColor opacity-80">
              {' '}
              Don't have an account?{' '}
            </Text>
          </TouchableOpacity>
        </View>
        {/* blue screen */}
        <View className="flex-1 justify-end h-1/4">
          {/* headers */}
          <View className="h-3/4 bg-whiteColor rounded-t-3xl">
            <Text className="text-3xl text-grayColor mt-6 text-center font-bold">
              {' '}
              Welcome Back{' '}
            </Text>
            <Text className="text-center text-lg text-grayColor mt-2">
              {' '}
              Enter your details below{' '}
            </Text>
            {/* username */}
            <View className="flex items-center gap-4 pt-6">
              <TextInput
                className="border-2 rounded-2xl w-80"
                placeholder="Enter your Email Address or Username"
              />
              {/* password */}
              <TextInput
                className="border-2 rounded-2xl w-80"
                placeholder="Enter your password here"
                secureTextEntry={true}
              />
              {/* sign in button */}
              <TouchableOpacity className="h-14 w-80 rounded-xl bg-blueColor">
                <Text className="p-4 text-center text-whiteColor">
                  {' '}
                  Sign in{' '}
                </Text>
              </TouchableOpacity>
              {/* in case authentication failed */}
              <Text className="font-bold"> Forget your password? </Text>
            </View>
            {/* third party authentication */}
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
      {/* <StartingModal isStartVisible={visibleStarting} /> */}
      <SignupModal isSignupVisible={visibleSignup} />
    </ScrollView>
  );
}
