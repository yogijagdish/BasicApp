import React, {useState, useEffect} from 'react';

import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {useIndividualProductDisplayAPIQuery} from '../redux/services/apiHandle';

export default function ItemScreen({route, navigation}) {
  const {id} = route.params;
  //   console.log(id);

  const {data, isSuccess} = useIndividualProductDisplayAPIQuery(id);

  const [item, setItem] = useState({});

  useEffect(() => {
    if (data && isSuccess) {
      setItem(data);
      console.log(data);
    }
  }, [data, isSuccess]);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* header  */}
        <View className="flex flex-row justify-between p-4">
          <View className="flex flex-row">
            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" color="black" size={30} />
            </Pressable>
            <Text className="text-lg ml-4 font-extrabold text-black">
              {' '}
              Product details{' '}
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate('cart')}>
            <Text className="text-lg text-black"> Cart: 0 </Text>
          </Pressable>
        </View>
        {/* Image */}
        <Image
          source={{
            uri: `${item.image}`,
          }}
          className="h-80 w-full"
          resizeMode="contain"
        />
        {/* title and description */}
        <View className="ml-4 mt-4">
          <Text className="text-lg font-extrabold text-bold text-black">
            {' '}
            {item.title}
          </Text>
          <Text className="text-black font-bold mt-2">
            {' '}
            Price: Rs {item.price}{' '}
          </Text>
          <Text className="text-black mt-2">{item.description}</Text>
        </View>

        {/* ratings */}

        <View className="flex flex-row mt-4 justify-center">
          <Text className="border-r-2 w-32 text-black">
            {' '}
            Rating: {item?.rating?.rate}{' '}
          </Text>
          <Text className="text-black w-32 text-center">
            {' '}
            Count: {item?.rating?.count}
          </Text>
        </View>

        {/* buttons */}
        <View className="flex flex-row justify-around mt-6">
          <TouchableOpacity className="w-32 h-8 bg-yellow-400 rounded-lg">
            <Text className="text-center text-md mt-1"> Add To Cart </Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-32 h-8 bg-blue-400 rounded-lg">
            <Text className="text-center text-md mt-1"> Buy Now </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
