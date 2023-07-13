import React from 'react';

import {ScrollView, Text, View, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Admin({navigation}) {
  return (
    <ScrollView>
      {/* Header */}
      <View className="flex flex-row p-4 bg-textColor">
        <Ionicons name="arrow-back" size={30} />
        <Text className="text-grayColor font-bold text-xl"> Admin </Text>
      </View>
      {/* options */}
      <View className="flex flex-row justify-around mt-8">
        <TouchableOpacity
          className="flex items-center"
          onPress={() => navigation.navigate('post-product')}>
          <MaterialCommunityIcons name="post" size={30} color="orange" />
          <Text className="text-textColor"> Add Product </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex items-center"
          onPress={() => navigation.navigate('update-product')}>
          <MaterialCommunityIcons name="update" size={30} color="orange" />
          <Text className="text-textColor"> Update Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex items-center"
          onPress={() => navigation.navigate('delete-product')}>
          <MaterialCommunityIcons name="delete" size={30} color="orange" />
          <Text className="text-textColor"> Delete Product </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
