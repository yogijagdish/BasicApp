// importing from react
import React from 'react';

// importing necessary libraries from react-native
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Button,
  ScrollView,
} from 'react-native';

// importing icons from react-native-vector-icons
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// calling the api hook from reduc api handle
import {useProductDisplayAPIQuery} from '../redux/services/apiHandle';

import {useSelector, useDispatch} from 'react-redux';
import {setDataLoad} from '../redux/features/dataSlice';

// main function
export default function Dashboard({navigation}) {
  const num = useSelector(state => state.loadMoreData.number);

  // making the api call
  const {data, isLoading, isSuccess} = useProductDisplayAPIQuery(num);

  // renders the all the products in Flatlist
  // eslint-disable-next-line react/no-unstable-nested-components
  const Item = ({title, price, id}) => (
    <View className="h-52 w-44 mt-6 ml-3 mr-2 rounded-xl">
      <Image
        source={{
          uri: `https://i.dummyjson.com/data/products/${id}/thumbnail.jpg`,
        }}
        className="h-32 w-40 rounded-2xl"
        resizeMode="contain"
      />
      <Text className="font-bold text-md"> {title}</Text>
      <Text className="font-bold text-md mt-1"> Price: Rs. {price}</Text>
      <TouchableOpacity
        onPress={() => {
          // console.log(`${id}`);
          navigation.navigate('item-screen', {id: `${id}`});
        }}>
        <Text
          className="font-extrabold mt-2 text-center"
          style={{color: '#FA8E00'}}>
          {' '}
          View Item{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(setDataLoad());
  };

  return (
    // main container view
    <SafeAreaView>
      {/* for home and menu , notification and shopping icons */}

      <View className="flex flex-row justify-between">
        <View className="flex flex-row gap-6 pl-4 pt-2">
          <Entypo name="menu" size={30} className="ml-4" />
          <Text className="text-lg font-bold"> Home </Text>
        </View>
        <View className="flex flex-row pr-4 gap-6 pt-2">
          <Ionicons name="notifications" color="black" size={30} />
          <TouchableOpacity onPress={() => navigation.navigate('cart')}>
            <MaterialIcons name="shopping-bag" color="black" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      {/* displaying our products */}
      <View className="p-4">
        <Text className="text-2xl text-black"> Our</Text>
        <Text
          className="font-bold text-3xl text-black"
          style={{color: '#FA8E00'}}>
          {' '}
          Products{' '}
        </Text>
      </View>
      {isSuccess && (
        <SafeAreaView>
          <FlatList
            data={data.products}
            numColumns={2}
            renderItem={({item}) => (
              <Item title={item.title} price={item.price} id={item.id} />
            )}
            keyExtractor={item => item.id}
          />
          <TouchableOpacity
            className="flex items-center mt-4 mb-4"
            onPress={handleLoadMore}>
            <View className="w-72 p-2 rounded-2xl bg-textColor">
              <Text className="text-center text-bold text-lg"> Load More </Text>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      )}
      {/* if isLoading is true it renders this part of the code */}
      {isLoading && (
        <View className="flex justify-center items-center h-screen">
          <ActivityIndicator size="large" color="#000000" />
        </View>
      )}
    </SafeAreaView>
  );
}
