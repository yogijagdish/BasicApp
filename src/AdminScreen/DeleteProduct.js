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
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';

// importing api from redux/services
import {useSearchItemAPIQuery} from '../redux/services/apiHandle';
import {useDeleteProductAPIMutation} from '../redux/services/apiHandle';

// main function
export default function DeleteProduct({navigation}) {
  // local state to keep track of what catogary of item is selected
  const [searchItem, setSearchItem] = useState('');
  // making api calls
  const searchingProduct = useSearchItemAPIQuery(searchItem);
  const [data, {isLoading, isSuccess, isError, isFetching}] =
    useDeleteProductAPIMutation();

  const handleDeleteObject = async id => {
    const response = await data(id);
    console.log(response);
    Alert.alert(
      ` ${response.data.title} Deleted Successfully`,
      `${response.data.title} deleted on ${response.data.deletedOn}`,
    );
  };

  const handleProductSelect = (id, title) => {
    console.log('handle product select', title);
    Alert.alert(
      `Delete ${title}`,
      `Are you sure you want to delete product ${title}`,
      [
        {
          text: 'Cancel',
          onPress: () =>
            Alert.alert(
              `${title} Deletion Canceled`,
              `Deletion of the product ${title} cancelled`,
            ),
        },
        {text: 'Yes', onPress: () => handleDeleteObject(id)},
      ],
    );
  };

  // displays the list of items in the category
  // eslint-disable-next-line react/no-unstable-nested-components
  const IndividualCategories = ({title, price, id, image}) => (
    <SafeAreaView>
      <ScrollView className="pl-8 pr-8">
        <TouchableOpacity onPress={() => handleProductSelect(id, title)}>
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

  // main return
  return (
    <SafeAreaView>
      <ScrollView>
        {/* search product text */}
        <View className="p-6">
          <Text className="text-2xl text-black">Delete</Text>
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
        {/* diplaying the product */}
        {searchingProduct.isSuccess && (
          <ScrollView>
            <Text className="text-textColor text-2xl pl-4"> {searchItem} </Text>
            <FlatList
              data={searchingProduct.data.products}
              showsVerticalScrollIndicator={false}
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
