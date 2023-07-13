import React, {useState} from 'react';

import {
  ScrollView,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useSearchItemAPIQuery} from '../redux/services/apiHandle';

export default function UpdateProduct() {
  const [searchItem, setSearchItem] = useState('');

  const searchingProduct = useSearchItemAPIQuery(searchItem);

  const IndividualCategories = ({title, price, id, image}) => (
    <SafeAreaView>
      <ScrollView className="p-8">
        <TouchableOpacity>
          <Image
            source={{
              uri: `${image}`,
            }}
            className="h-32 w-full"
            resizeMode="contain"
          />
          <Text className="font-bold text-xl text-center mt-4"> {title} </Text>
          <Text className="text-lg text-center mt-2"> Price: Rs {price} </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-8">
          <Text className="text-xl"> Update </Text>
          <Text className="text-3xl text-textColor font-bold"> Products </Text>
        </View>
        <View className="flex flex-row justify-center">
          <TextInput
            className="border-2 h-10 w-80 mt-4"
            onChangeText={setSearchItem}
            value={searchItem}
            placeholder="Search Products Here . . ."
          />
        </View>
        {searchingProduct.isSuccess && (
          <SafeAreaView>
            <ScrollView>
              <FlatList
                data={searchingProduct.data.products}
                renderItem={({item}) => (
                  <IndividualCategories
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    image={item.thumbnail}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </ScrollView>
          </SafeAreaView>
        )}
        {searchingProduct.isLoading && (
          <View>
            <ActivityIndicator size="large" color="#000000" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
