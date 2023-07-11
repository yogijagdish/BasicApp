import React from 'react';

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
} from 'react-native';

export default function SearchProduct() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-8">
          <Text className="text-2xl text-black"> Search</Text>
          <Text className="text-3xl font-bold" style={{color: '#FA8E00'}}>
            {' '}
            Products{' '}
          </Text>
        </View>
        <Text className="text-xl ml-2 text-black"> Categories </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="flex gap-2 pl-2 mt-2">
          {/* view 1 */}
          <View
            className="flex flex-row w-36 h-10 rounded-2xl"
            style={{backgroundColor: '#FA8E00'}}>
            <Image
              source={{uri: 'https://i.dummyjson.com/data/products/2/1.jpg'}}
              className="h-8 w-8 rounded-full mt-1 ml-1"
              resizeMode="contain"
            />
            <Text className="text-black mt-2 ml-2"> SmartPhones</Text>
          </View>
          {/* view 2 */}
          <View
            className="flex flex-row w-36 h-10 rounded-2xl"
            style={{backgroundColor: '#FA8E00'}}>
            <Image
              source={{uri: 'https://i.dummyjson.com/data/products/7/1.jpg'}}
              className="h-8 w-8 rounded-full mt-1 ml-1"
              resizeMode="contain"
            />
            <Text className="text-black mt-2 ml-2"> Laptops</Text>
          </View>
          {/* view 3 */}
          <View
            className="flex flex-row w-36 h-10 rounded-2xl"
            style={{backgroundColor: '#FA8E00'}}>
            <Image
              source={{uri: 'https://i.dummyjson.com/data/products/13/1.jpg'}}
              className="h-8 w-8 rounded-full mt-1 ml-1"
              resizeMode="contain"
            />
            <Text className="text-black mt-2 ml-2"> Fragnance </Text>
          </View>
          {/* view 4 */}
          <View
            className="flex flex-row w-36 h-10 rounded-2xl"
            style={{backgroundColor: '#FA8E00'}}>
            <Image
              source={{uri: 'https://i.dummyjson.com/data/products/16/3.jpg'}}
              className="h-8 w-8 rounded-full mt-1 ml-1"
              resizeMode="contain"
            />
            <Text className="text-black mt-2 ml-2"> SkinCare </Text>
          </View>
          {/* view 5 */}
          <View
            className="flex flex-row w-36 h-10 rounded-2xl"
            style={{backgroundColor: '#FA8E00'}}>
            <Image
              source={{uri: 'https://i.dummyjson.com/data/products/21/2.jpg'}}
              className="h-8 w-8 rounded-full mt-1 ml-1"
              resizeMode="contain"
            />
            <Text className="text-black mt-2 ml-2"> Groceries </Text>
          </View>
          {/* view 5 */}
          <View
            className="flex flex-row w-36 h-10 rounded-2xl"
            style={{backgroundColor: '#FA8E00'}}>
            <Image
              source={{uri: 'https://i.dummyjson.com/data/products/26/1.jpg'}}
              className="h-8 w-8 rounded-full mt-1 ml-1"
              resizeMode="contain"
            />
            <Text className="text-black mt-2 ml-2"> Home Decoration </Text>
          </View>
        </ScrollView>
        <View className="mt-6">
          <Text className="text-black text-lg"> Smart Phones</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex mt-6 ml-2 ">
            {/* view 1 */}
            <View>
              <Image
                source={{uri: 'https://i.dummyjson.com/data/products/2/2.jpg'}}
                className="h-24 w-52"
                resizeMode="contain"
              />
              <Text className="p-2 text-black text-lg font-bold">
                {' '}
                Iphone 9
              </Text>
              <Text className="p-2 font-bold text-black"> Rs: 199 </Text>
            </View>
            {/* view 3 */}
            <View>
              <Image
                source={{uri: 'https://i.dummyjson.com/data/products/5/2.jpg'}}
                className="h-24 w-52"
                resizeMode="contain"
              />
              <Text className="p-2 text-black text-lg font-bold">
                {' '}
                Samsung Universe 9
              </Text>
              <Text className="p-2 font-bold text-black"> Rs: 199 </Text>
            </View>
            {/* view 2 */}
            <View>
              <Image
                source={{uri: 'https://i.dummyjson.com/data/products/4/2.jpg'}}
                className="h-24 w-52"
                resizeMode="contain"
              />
              <Text className="p-2 text-black text-lg font-bold">
                {' '}
                Iphone X
              </Text>
              <Text className="p-2 font-bold text-black"> Rs: 199 </Text>
            </View>
          </ScrollView>
        </View>
        <View className="mt-6">
          <Text className="text-black text-lg"> Laptops </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex mt-6 ml-2 ">
            {/* view 1 */}
            <View>
              <Image
                source={{uri: 'https://i.dummyjson.com/data/products/6/2.jpg'}}
                className="h-24 w-52"
                resizeMode="contain"
              />
              <Text className="p-2 text-black text-lg font-bold">
                {' '}
                Samsung Galaxy Book
              </Text>
              <Text className="p-2 font-bold text-black"> Rs: 199 </Text>
            </View>
            {/* view 3 */}
            <View>
              <Image
                source={{uri: 'https://i.dummyjson.com/data/products/7/2.jpg'}}
                className="h-24 w-52"
                resizeMode="contain"
              />
              <Text className="p-2 text-black text-lg font-bold">
                {' '}
                Microsoft Surface Laptop 4
              </Text>
              <Text className="p-2 font-bold text-black"> Rs: 199 </Text>
            </View>
            {/* view 2 */}
            <View>
              <Image
                source={{uri: 'https://i.dummyjson.com/data/products/8/2.jpg'}}
                className="h-24 w-52"
                resizeMode="contain"
              />
              <Text className="p-2 text-black text-lg font-bold">
                {' '}
                Infinix INBOOK
              </Text>
              <Text className="p-2 font-bold text-black"> Rs: 199 </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
