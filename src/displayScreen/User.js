import React from 'react';

import {
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const useTemp = require('../Images/blank_picture.jpg');

import {useSelector} from 'react-redux';

export default function User({navigation}) {
  const username = useSelector(state => state.data.username);
  const title = useSelector(state => state.data.title);
  const email = useSelector(state => state.data.email);
  const mobile = useSelector(state => state.data.mobile);
  const twitter = useSelector(state => state.data.twitter);

  const handlePress = () => {
    navigation.navigate('user');
  };

  return (
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
          <Text className="text-2xl text-white font-bold"> {username} </Text>
          <Text className="text-lg text-white"> {title} </Text>
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
        <Text className="text-xl text-black text-bold"> {email} </Text>
        <Pressable onPress={handlePress}>
          <View className="border-b-2 border-gray-400 w-80 h-14" />
        </Pressable>
        <Text className="text-lg mt-8"> Phone No </Text>
        <Text className="text-xl text-black text-bold"> {mobile} </Text>
        <Pressable onPress={handlePress}>
          <View className="border-b-2 border-gray-400 w-80 h-14" />
        </Pressable>
        <Text className="text-lg mt-8"> Twitter </Text>
        <Text className="text-xl text-black text-bold"> {twitter} </Text>
        <Pressable onPress={handlePress}>
          <View className="border-b-2 border-gray-400 w-80 h-14" />
        </Pressable>
      </View>
      <View className="flex items-center mt-4 mb-4">
        <TouchableOpacity
          className="p-4 w-32 rounded-full bg-textColor"
          onPress={() => navigation.navigate('signin')}>
          <Text className="text-center text-grayColor font-bold text-lg">
            {' '}
            Log Out{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
