import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Pressable,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const useTemp = require('../Images/blank_picture.jpg');

export default function Dashboard({navigation}) {
  const handlePress = () => {
    navigation.navigate('user');
  };

  return (
    // main container view
    <ScrollView className="container">
      {/* blue color view */}
      <View className="flex bg-blue-600 h-96 rounded-b-3xl">
        {/* it holds the two component home and edit */}
        <View className="flex flex-row mt-8">
          <View className="ml-auto">
            <Text className="text-white text-2xl"> Home </Text>
          </View>
          <Pressable
            className="ml-28 mr-6"
            onPress={() => navigation.navigate('edit-detail')}>
            <MaterialIcons name="edit" color="white" size={30} />
          </Pressable>
        </View>
        {/* image */}
        <View className="flex items-center mt-8">
          <Image className="h-32 w-32 rounded-full" source={useTemp} />
        </View>
        {/* username and title */}
        <View className="flex items-center mt-6">
          <Text className="text-2xl text-white font-bold">
            {' '}
            No User Name Set{' '}
          </Text>
          <Text className="text-lg text-white"> no title set </Text>
        </View>
        {/* followers and following */}
        <View className="flex flex-row mt-8">
          <View className="basis-1/2 border-r-2 border-white">
            <Text className="text-center text-white text-xl">
              {' '}
              0 Followers{' '}
            </Text>
          </View>
          <View className="basis-1/2">
            <Text className="text-white text-xl text-center">
              {' '}
              0 Followings{' '}
            </Text>
          </View>
        </View>
      </View>
      {/* white color view */}
      <View className="mt-8 ml-8">
        <Text className="text-lg"> Email </Text>
        <Text className="text-xl text-black text-bold"> No Email Set </Text>
        <Pressable onPress={handlePress}>
          <View className="border-b-2 border-gray-400 w-80 h-14" />
        </Pressable>
        <Text className="text-lg mt-8"> Phone No </Text>
        <Text className="text-xl text-black text-bold"> No Phone No Set </Text>
        <Pressable onPress={handlePress}>
          <View className="border-b-2 border-gray-400 w-80 h-14" />
        </Pressable>
        <Text className="text-lg mt-8"> Twitter </Text>
        <Text className="text-xl text-black text-bold"> No Twitter Set </Text>
        <Pressable onPress={handlePress}>
          <View className="border-b-2 border-gray-400 w-80 h-14" />
        </Pressable>
      </View>
    </ScrollView>
  );
}
