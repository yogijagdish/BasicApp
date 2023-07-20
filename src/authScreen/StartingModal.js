import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Modal, ScrollView} from 'react-native';

import SigninModal from './SigninModal';
// import SignupModal from './SignupModal';

export default function StartingModal({isStartVisible}) {
  const [visibleSignin, setVisibleSignin] = useState(false);
  const [visibleStarting, setVisibleStarting] = useState(isStartVisible);
  const [visibleSignup, setVisibleSignup] = useState(false);

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        animationDuration={5000}
        visible={visibleStarting}>
        <View className="flex items-end p-4">
          <TouchableOpacity
            onPress={() => {
              setVisibleStarting(false);
              setVisibleStarting(false);
              setVisibleSignup(true);
            }}>
            <Text className="text-whiteColor opacity-80">
              {' '}
              Don't have an account?{' '}
            </Text>
          </TouchableOpacity>
        </View>
        {/* headers */}
        <View className="flex-1 justify-end h-1/4">
          <View className="h-3/4 bg-whiteColor rounded-t-3xl">
            <Text className="text-3xl text-grayColor mt-6 text-center font-bold">
              {' '}
              Welcome{' '}
            </Text>
            <Text className="text-center text-lg text-grayColor mt-2">
              {' '}
              Lets Start from here{' '}
            </Text>
            {/* button */}
            <TouchableOpacity
              className="mx-auto my-auto p-2 w-72 bg-blueColor rounded-full"
              onPress={() => {
                setVisibleStarting(false);
                setVisibleSignin(true);
              }}>
              <Text className="text-whiteColor font-bold text-lg text-center">
                {' '}
                Let's Get Started{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <SigninModal isLoginVisible={visibleSignin} />
      {/* <SignupModal isSignupVisible={visibleSignup} /> */}
    </ScrollView>
  );
}
