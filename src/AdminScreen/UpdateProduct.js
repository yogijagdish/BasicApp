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
  Modal,
  Button,
} from 'react-native';

// importing api from redux/services
import {useSearchItemAPIQuery} from '../redux/services/apiHandle';
import {useIndividualProductDisplayAPIQuery} from '../redux/services/apiHandle';

// main function
export default function DeleteProduct() {
  // local state to keep track of what catogary of item is selected
  const [searchItem, setSearchItem] = useState('');
  const [displayModal, setDisplayModal] = useState(false);
  const [productId, setProductId] = useState();
  const [updateProduct, setUpdateProduct] = useState({
    description: '',
    price: '',
    discountPercentage: '',
    stock: '',
  });
  // making api calls
  const searchingProduct = useSearchItemAPIQuery(searchItem);
  const selectedProduct = useIndividualProductDisplayAPIQuery(productId);

  // displays the list of items in the category
  // eslint-disable-next-line react/no-unstable-nested-components
  const IndividualCategories = ({title, price, id, image}) => (
    <SafeAreaView>
      <ScrollView className="pl-8 pr-8">
        <TouchableOpacity
          onPress={() => {
            setProductId(id);
            setDisplayModal(true);
          }}>
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

  const handleTextInput = (key, value) => {
    setUpdateProduct({...updateProduct, [key]: value});
  };

  // main return
  return (
    <SafeAreaView>
      <ScrollView>
        {/* search product text */}
        <View className="p-6">
          <Text className="text-2xl text-black">Update</Text>
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
        {selectedProduct.isSuccess && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={displayModal}>
            <View className="flex-1 justify-end">
              <View className="h-3/4 bg-whiteColor">
                <Text className="p-2 text-center text-xl text-blueColor">
                  {' '}
                  Update Product Details{' '}
                </Text>
                <TextInput readOnly={true} className="text-grayColor font-bold">
                  {' '}
                  {selectedProduct.data.title}
                </TextInput>
                <TextInput
                  onChangeText={value => handleTextInput('description', value)}>
                  {' '}
                  {selectedProduct.data.description}{' '}
                </TextInput>
                <TextInput> {selectedProduct.data.price}</TextInput>
                <TextInput>
                  {' '}
                  {selectedProduct.data.discountPercentage}
                </TextInput>
                <TextInput> {selectedProduct.data.stock}</TextInput>
                <TouchableOpacity onPress={() => console.log(updateProduct)}>
                  <Text> Display data </Text>
                </TouchableOpacity>
                <Button title="close" onPress={() => setDisplayModal(false)} />
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
