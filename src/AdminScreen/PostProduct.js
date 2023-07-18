// importing libraries from react
import React, {useState} from 'react';

// importing components from react-native
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// api import
import {useAddProductAPIMutation} from '../redux/services/apiHandle';

// main function
export default function PostProduct() {
  // local state for storing the text input in the textinput
  const [newProductData, setNewProductData] = useState({
    title: '',
    description: '',
    brand: '',
    category: '',
    discount: '',
    rating: '',
    stock: '',
  });
  // state for making modal visible
  const [modalVisible, setModalVisible] = useState(false);
  //stores the response from api call
  const [responseData, setResponseData] = useState({});

  // updates the state when input is typed in the input form
  const handleInputForm = (key, value) => {
    setNewProductData({...newProductData, [key]: value});
  };
  // api calling
  const [data, {isLoading, isError, isFetching, isSuccess}] =
    useAddProductAPIMutation();

    // fires when add button is clicked
  const handleAddButton = async () => {
    const response = await data(newProductData);
    if (response.error) {
      console.log(response.error);
    }
    if (response.data) {
      setResponseData(response.data);
      console.log(responseData);
      setModalVisible(true);
    }
  };

  // main return
  return (
    <SafeAreaView>
      {/* header */}
      <View className="bg-blueColor h-16 flex justify-center items-center">
        <Text className="text-whiteColor text-xl"> Add Product Form </Text>
      </View>
      {/* form view */}
      <ScrollView>
        <View className="flex items-center gap-4 p-4">
          {/* product title */}
          <TextInput
            className="border-2 h-14 w-80 text-xl rounded-lg"
            placeholder="Product Title"
            onChangeText={value => handleInputForm('title', value)}
          />
          {/* product description */}
          <TextInput
            className="border-2 h-14 w-80 text-xl rounded-lg"
            placeholder="Product Description"
            onChangeText={value => handleInputForm('description', value)}
          />
          {/* product brand */}
          <TextInput
            className="border-2 h-14 w-80 text-xl rounded-lg"
            placeholder="Product brand"
            onChangeText={value => handleInputForm('brand', value)}
          />
          {/* product category */}
          <TextInput
            className="border-2 h-14 w-80 text-xl rounded-lg"
            placeholder="Product Category"
            onChangeText={value => handleInputForm('category', value)}
          />
          {/* product price */}
          <TextInput
            className="border-2 h-14 w-80 text-xl rounded-lg"
            placeholder="Product Price"
            keyboardType="numeric"
            onChangeText={value => handleInputForm('price', value)}
          />
          {/* product discount */}
          <TextInput
            className="border-2 h-14 w-80 text-xl rounded-lg"
            placeholder="Product Discount Percentage"
            keyboardType="numeric"
            onChangeText={value => handleInputForm('discount', value)}
          />
          <View className="flex flex-row w-80 justify-between">
            {/* product rating */}
            <TextInput
              className="border-2 h-14 w-32 text-xl rounded-lg"
              placeholder="Rating"
              keyboardType="numeric"
              onChangeText={value => handleInputForm('rating', value)}
            />
            {/* product stock */}
            <TextInput
              className="border-2 h-14 w-32 text-xl rounded-lg"
              placeholder="Stock"
              keyboardType="numeric"
              onChangeText={value => handleInputForm('stock', value)}
            />
          </View>
          {/* button */}
          <TouchableOpacity
            className="bg-blueColor p-2 h-10 w-56 rounded-lg"
            onPress={handleAddButton}>
            <Text className="text-whiteColor text-center"> Add Product </Text>
          </TouchableOpacity>
        </View>
        {/* modal to display the addition of object */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View className="flex-1 justify-end">
            <View className="h-1/4 bg-blueColor rounded-t-3xl">
              <Text className="p-4 text-center text-xl text-whiteColor">
                {' '}
                {responseData.title} Product Added{' '}
              </Text>
              <Text className="text-center text-whiteColor">
                {' '}
                New Product {responseData.title} with Prodct id{' '}
                {responseData.id} is added
              </Text>
              <TouchableOpacity
                className="flex items-center"
                onPress={() => setModalVisible(false)}>
                <View className="w-24 p-4">
                  <Text className="bg-whiteColor text-grayColor p-1 text-center">
                    {' '}
                    Close{' '}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
