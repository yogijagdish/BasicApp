import React from 'react';

import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useIndividualProductDisplayAPIQuery} from '../redux/services/apiHandle';

import {useSelector, useDispatch} from 'react-redux';
import {unSetItemToCart} from '../redux/features/cartSlice';

export default function Cart({navigation}) {
  const DATA = [];

  const dispatch = useDispatch();

  const cartItem = useSelector(state => state.addToCart.id);

  const listCart = cartItem.map(number => {
    const {data, isSuccess, isLoading} =
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useIndividualProductDisplayAPIQuery(number);
    while (isLoading) {
      console.log('loading');
    }
    DATA.push(data);
    console.log(DATA);
  });

  const handleRemoveFromCart = id => {
    console.log(cartItem);
    const index = cartItem.indexOf(`${id}`);
    console.log(index);
    dispatch(unSetItemToCart(index));
    navigation.navigate('bottom-tab');
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const Item = ({title, description, price, id}) => (
    <View className="flex flex-row pl-2 pt-6 pb-6 mt-2">
      <View className="w-56">
        <Text className="font-extrabold text-lg text-textColor"> {title} </Text>
        <Text className="font-bold text-black mt-2"> Price: Rs {price} </Text>
        {/* buy now */}
        <TouchableOpacity
          className="h-10 rounded-xl bg-blueColor mt-4"
          onPress={() => console.log('buy')}>
          <Text className="text-lg text-center text-black font-bold mt-1">
            {' '}
            Buy Now{' '}
          </Text>
        </TouchableOpacity>
        {/* remove from cart */}
        <TouchableOpacity
          className="h-10 rounded-xl bg-textColor mt-2"
          onPress={() => handleRemoveFromCart(id)}>
          <Text className="text-black text-center font-bold text-lg mt-1">
            {' '}
            Remove From Cart
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: `https://i.dummyjson.com/data/products/${id}/thumbnail.jpg`,
        }}
        className="h-52 w-32 ml-6"
        resizeMode="contain"
      />
    </View>
  );

  return (
    <SafeAreaView>
      <Text> {listCart} </Text>
      <View className="flex flex-row justify-between mb-4">
        {/* for arrow and name */}
        <View className="flex flex-row ml-6">
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" color="#FA8E00" size={30} />
          </Pressable>
          <Text className="text-xl ml-2 font-extrabold text-textColor">
            {' '}
            Cart{' '}
          </Text>
        </View>
        {/* for icon */}
        <View className="mr-6">
          <MaterialIcons name="shopping-bag" color="#FA8E00" size={30} />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            title={item.title}
            description={item.description}
            price={item.price}
            id={item.id}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
