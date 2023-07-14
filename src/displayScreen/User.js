import React from 'react';

import {
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  StatusBar,
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
  const image = useSelector(state => state.data.image);

  const handlePress = () => {
    navigation.navigate('user');
  };

  return (
    <ScrollView className="container">
      <StatusBar backgroundColor="#FA8E00" />
      {/* blue color view */}
      <View className="flex bg-textColor h-1/2 rounded-b-3xl">
        {/* it holds the two component home and edit */}
        <View className="flex flex-row justify-between p-8">
          <Text className="text-whiteColor text-2xl"> {username} Profile </Text>
          <Pressable onPress={() => navigation.navigate('edit-detail')}>
            <MaterialIcons name="edit" color="white" size={30} />
          </Pressable>
        </View>
        {/* image */}
        <View className="flex items-center">
          <Image
            className="h-32 w-32 rounded-full"
            source={{uri: `${image}`}}
            resizeMode="contain"
          />
        </View>
        {/* username and title */}
        <View className="flex items-center mt-6">
          <Text className="text-3xl text-whiteColor font-bold">
            {' '}
            {username}{' '}
          </Text>
          <Text className="text-xl text-whiteColor"> {title} </Text>
        </View>
        {/* followers and following */}
        <View className="flex flex-row mt-8">
          <View className="basis-1/2 border-r-2 border-white">
            <Text className="text-center text-whiteColor text-xl">
              {' '}
              0 Followers{' '}
            </Text>
          </View>
          <View className="basis-1/2">
            <Text className="text-whiteColor text-xl text-center">
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
          onPress={() => navigation.navigate('starting')}>
          <Text className="text-center text-grayColor font-bold text-lg">
            {' '}
            Log Out{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
