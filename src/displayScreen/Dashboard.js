import React from 'react';

import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {useProductDisplayAPIQuery} from '../redux/services/apiHandle';

export default function Dashboard({navigation}) {
  const {data, isSuccess} = useProductDisplayAPIQuery();

  // eslint-disable-next-line react/no-unstable-nested-components
  const Item = ({title, image, id}) => (
    <View className="h-52 w-44 mt-6 ml-3 mr-2 rounded-xl">
      <Image
        source={{uri: `${image}`}}
        className="h-32 w-40"
        resizeMode="contain"
      />
      <Text numberOfLines={2} className="font-bold text-md mt-2">
        {' '}
        {title}
      </Text>
      <TouchableOpacity
        onPress={() => {
          // console.log(`${id}`);
          navigation.navigate('item-screen', {id: `${id}`});
        }}>
        <Text className="font-extrabold mt-2 text-blue-600 text-center">
          {' '}
          View Item{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    // main container view
    <SafeAreaView>
      {/* for home and menu , notification and shopping icons */}
      <View className="flex flex-row justify-between">
        <View className="flex flex-row gap-6 pl-4 pt-2">
          <Entypo name="menu" color="black" size={30} className="ml-4" />
          <Text className="text-lg font-bold text-black"> Home </Text>
        </View>
        <View className="flex flex-row pr-4 gap-6 pt-2">
          <Ionicons name="notifications" color="black" size={30} />
          <MaterialIcons name="shopping-bag" color="black" size={30} />
        </View>
      </View>
      {/* search bar */}
      <View className="flex items-center mt-4">
        <View className="flex flex-row border-2 border-gray-500 h-10 rounded-lg">
          <TextInput className="w-72" placeholder="What are you looking for?" />
          <TouchableOpacity className="mt-1">
            <EvilIcons name="search" color="gray" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      {/* products */}
      {/* <View className=" border-2 h-56 w-40 m-6 rounded-xl">
        <Image
          source={{uri: `${data.image}`}}
          className="h-32 w-40"
          resizeMode="contain"
        />
        <Text numberOfLines={2} className="mt-2 text-md text-black">
          {' '}
          {data.title}{' '}
        </Text>
        <TouchableOpacity>
          <Text className="text-blue-900 font-extrabold text-center mt-4"> View Product </Text>
        </TouchableOpacity>
      </View> */}
      <View>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item}) => (
            <Item title={item.title} image={item.image} id={item.id} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
