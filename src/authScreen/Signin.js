import React, {useState} from 'react';

import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';

export default function Signin({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('username', username, 'password', password);
    navigation.navigate('bottom-tab');
  };

  const handleSignup = () => {
    navigation.navigate('signup');
  };

  const handleForgetPassword = () => {
    navigation.navigate('forget-password');
  };

  return (
    // container view for whole screen
    <View>
      <View className="container flex justify-center items-center bg-backgroundColor h-64">
        <Text className="text-3xl text-textColor font-extrabold">
          {' '}
          Sign in{' '}
        </Text>
      </View>
      {/* getting user credentials */}
      <View className="flex justify-center items-center">
        <Text className="text-md mt-8"> Enter your Username or email </Text>
        <TextInput
          className="border-2 mt-2 h-10 w-64 rounded-xl border-gray-500"
          onChangeText={setUsername}
          value={username}
          placeholder="emample@emample.com"
        />
        <Text className="text-md mt-4"> Password </Text>
        <TextInput
          className="border-2 h-10 w-64 rounded-xl mt-2 border-gray-500"
          onChangeText={setPassword}
          value={password}
          placeholder="password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          className="mt-8 w-64 h-10 bg-textColor rounded-2xl"
          onPress={handleSubmit}>
          <Text className="text-center text-lg font-bold text-backgroundColor mt-1">
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      {/* for forget password and sign up */}
      <View className="flex items-center mt-6">
        <Pressable onPress={handleForgetPassword}>
          <Text className="text-blue-600 font-bold "> Forget Password?</Text>
        </Pressable>
        <View className="flex flex-row text-md font-bold mt-4">
          <Text> Don't have an account? </Text>
          <Pressable onPress={handleSignup}>
            <Text className="text-blue-600 font-extrabold"> Sign up </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
