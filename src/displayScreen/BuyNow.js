import React from 'react';

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function BuyNow({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-8 mt-4">
          <Text className="text-2xl"> Order </Text>
          <Text className="text-3xl font-bold" style={{color: '#FA8E00'}}>
            Summary{' '}
          </Text>
        </View>
        <View className="mt-4 ml-4">
          <View className="flex flex-row items-center h-10">
            <Text className="text-lg text-black" style={{color: '#FA8E00'}}>
              {' '}
              Product:
            </Text>
            <Text
              className="w-72 h-8 ml-2 text-lg text-black"
              style={{backgroundColor: '#d1d5db'}}>
              {' '}
              Iphone 9{' '}
            </Text>
          </View>
          <View className="flex flex-row items-center h-10">
            <Text className="text-lg" style={{color: '#FA8E00'}}>
              {' '}
              Quantity:
            </Text>
            <Text
              className="w-72 h-8 ml-2 text-lg text-black"
              style={{backgroundColor: '#d1d5db'}}>
              {' '}
              2{' '}
            </Text>
          </View>
          <View className="flex flex-row items-center h-10">
            <Text className="text-lg" style={{color: '#FA8E00'}}>
              {' '}
              Amount:
            </Text>
            <Text
              className="w-72 h-8 ml-2 text-lg text-black"
              style={{backgroundColor: '#d1d5db'}}>
              {' '}
              Rs. 520{' '}
            </Text>
          </View>
          <View className="flex flex-row items-center h-10">
            <Text className="text-lg" style={{color: '#FA8E00'}}>
              {' '}
              Total:
            </Text>
            <Text
              className="w-72 h-8 ml-2 text-lg text-black"
              style={{backgroundColor: '#d1d5db'}}>
              {' '}
              Iphone 9{' '}
            </Text>
          </View>
          <TouchableOpacity
            className="mt-4 h-10 rounded-xl w-80"
            style={{backgroundColor: '#FA8E00'}}
            onPress={() => navigation.navigate('location')}>
            <Text className="text-center text-black text-lg mt-1">
              {' '}
              Place Order
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="mt-4 h-10 rounded-xl w-80 bg-red-500">
            <Text className="text-center text-black text-lg mt-1">
              {' '}
              Discard Order
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
