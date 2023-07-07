import React from 'react';

import {Text, View, SafeAreaView, Pressable, Image} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Cart({navigation}) {
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between p-4">
        <View className="flex flex-row">
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" color="black" size={30} />
          </Pressable>
          <Text className="text-lg ml-4 font-extrabold text-black"> Cart </Text>
        </View>
        <MaterialIcons name="shopping-bag" color="black" size={30} />
      </View>
      <View className="flex flex-row justify-around border-2 p-2 m-2">
        <View className="w-64">
          <Text className="font-bold text-black">
            {' '}
            Mens Casual Premium Slim Fit T-Shirts{' '}
          </Text>
          <Text numberOfLines={2}>
            {' '}
            Slim-fitting style, contrast raglan long sleeve, three-button henley
            placket, light weight and soft fabric for breathable and comfortable
            wearing. And Solid stitched shirts with round neck made for
            durability and a great fit for casual fashion wear and diehard
            baseball fans. The Henley style round neckline includes a
            three-button placket{' '}
          </Text>
          <Text> Price: Rs 22.3 </Text>
        </View>
        <Image
          source={{
            uri: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          }}
          className="h-16 w-16"
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}
