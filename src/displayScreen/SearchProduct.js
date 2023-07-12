// import necessary hook from react
import React, {useState} from 'react';

// import necessary component from react-native
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';

// importing api from redux/services
import {useGetCategoriesAPIQuery} from '../redux/services/apiHandle';
import {useGetIndividualCategoriesAPIQuery} from '../redux/services/apiHandle';
import {useSearchItemAPIQuery} from '../redux/services/apiHandle';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

// main function
export default function SearchProduct() {
  // local state to keep track of what catogary of item is selected
  const [category, setCategory] = useState('');
  const [searchItem, setSearchItem] = useState('');
  // making api calls
  const categoriesList = useGetCategoriesAPIQuery();
  const individualCategoriesList = useGetIndividualCategoriesAPIQuery(category);
  const searchingProduct = useSearchItemAPIQuery(searchItem);

  // fires when any catogery is clicked
  const handleCategoriesPress = ({item}) => {
    setCategory(item);
  };

  // displays the category of items at top
  // eslint-disable-next-line react/no-unstable-nested-components
  const Categories = ({item, index}) => (
    <TouchableOpacity
      className="p-4 rounded-2xl ml-4"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{backgroundColor: '#FA8E00'}}
      onPress={() => handleCategoriesPress({item})}>
      <Text className="font-bold"> {item} </Text>
    </TouchableOpacity>
  );

  // displays the list of items in the category
  // eslint-disable-next-line react/no-unstable-nested-components
  const IndividualCategories = ({title, price, id, image}) => (
    <SafeAreaView>
      <ScrollView className="p-8">
        <Image
          source={{
            uri: `${image}`,
          }}
          className="h-32 w-full"
          resizeMode="contain"
        />
        <Text className="font-bold text-xl text-center mt-4"> {title} </Text>
        <Text className="text-lg text-center mt-2"> Price: Rs {price} </Text>
      </ScrollView>
    </SafeAreaView>
  );

  // main return
  return (
    <SafeAreaView>
      <ScrollView>
        {/* search product text */}
        <View className="p-6">
          <Text className="text-2xl text-black">Search</Text>
          <Text className="text-3xl font-bold" style={{color: '#FA8E00'}}>
            {' '}
            Products{' '}
          </Text>
          {/* Searching bar */}
          <View className="flex flex-row justify-center">
            <TextInput
              className="border-2 h-10 w-80 mt-4"
              onChangeText={setSearchItem}
              value={searchItem}
              placeholder="Search Products Here . . ."
            />
          </View>
        </View>
        {/* display categories list */}
        {categoriesList.isSuccess && (
          <SafeAreaView>
            <FlatList
              data={categoriesList.data}
              renderItem={({item, index}) => (
                <Categories item={item} index={index} />
              )}
              keyExtractor={item => item}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </SafeAreaView>
        )}
        {/* while category is loading displays loading signal */}
        {categoriesList.isLoading && <ActivityIndicator size="large" />}
        {/* displays the list of individual category */}
        {individualCategoriesList.isSuccess && (
          <SafeAreaView>
            <FlatList
              data={individualCategoriesList.data.products}
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
          </SafeAreaView>
        )}
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
      </ScrollView>
    </SafeAreaView>
  );
}
