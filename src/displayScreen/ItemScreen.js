// importing necessary libraries from react
import React, {useState, useEffect} from 'react';

// importing necessary libraries from react native
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

// importing libraries for react icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

// redux
import {useIndividualProductDisplayAPIQuery} from '../redux/services/apiHandle';
import {useDispatch, useSelector} from 'react-redux';
import {setItemToCart} from '../redux/features/cartSlice';

// main function
export default function ItemScreen({route, navigation}) {
  // redux
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.addToCart.id);

  // getting the id sent from dashboard
  const {id} = route.params;

  // api
  const {data, isSuccess} = useIndividualProductDisplayAPIQuery(id);

  // local state
  const [displayOnScreen, setDisplayOnScreen] = useState(false);
  const [item, setItem] = useState({});
  const [image, setImage] = useState([]);
  const [imageData, setImageData] = useState('');

  //  functions

  // add to cart button
  const handleAddToCart = () => {
    const unique_item = cartItem.includes(id);
    if (!unique_item) {
      dispatch(setItemToCart(id));
    } else
      Alert.alert('Message', 'This Item is already stored in the Cart', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
        },
        {
          text: 'Ok',
          onPress: () => console.log('ok pressed'),
        },
      ]);
  };

  // touching the image
  const handleTouchImage = item => {
    setDisplayOnScreen(true);
    console.log(item);
    setImageData(item);
  };

  // useEffect
  useEffect(() => {
    if (data && isSuccess) {
      setItem(data);
      console.log(data);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (data && isSuccess) {
      setImage(data.images);
      console.log(image);
    }
  }, [data, image, isSuccess]);

  // eslint-disable-next-line react/no-unstable-nested-components
  const DisplayImages = () => (
    <View className="flex flex-row gap-2">
      {image.map((items, index) => (
        <TouchableOpacity onPress={() => handleTouchImage(items)}>
          <Image
            key={index}
            source={{
              uri: `${items}`,
            }}
            className="h-16 w-16 ml-4"
            resizeMode="contain"
          />
          <Text>console.log(items);</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView>
      {!displayOnScreen && (
        <ScrollView>
          {/* header  */}
          <View className="flex flex-row justify-between p-4">
            <View className="flex flex-row">
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" color="#f97316" size={30} />
              </Pressable>
              <Text className="text-lg ml-4 font-extrabold text-textColor">
                {' '}
                Product details{' '}
              </Text>
            </View>
            <Pressable onPress={() => navigation.navigate('cart')}>
              <Text className="text-lg text-textColor">
                {' '}
                Cart: {cartItem.length}{' '}
              </Text>
            </Pressable>
          </View>
          {/* Image */}
          <Image
            source={{
              uri: `https://i.dummyjson.com/data/products/${id}/thumbnail.jpg`,
            }}
            className="h-80 w-full"
            resizeMode="contain"
          />
          <DisplayImages />
          {/* title and description */}
          <View className="ml-4">
            <Text className="text-lg font-extrabold text-bold text-textColor">
              {' '}
              {item.title}
            </Text>

            <Text className="text-black mt-2">{item.description}</Text>
          </View>
          <View className="flex mt-4 ml-4 ">
            <Text className="text-black font-bold text-lg">
              {' '}
              Price: Rs {item.price}{' '}
            </Text>
            <Text className="text-black font-bold text-lg">
              {' '}
              Discount: {item.discountPercentage} %
            </Text>
          </View>

          {/* ratings */}

          <View className="flex flex-row mt-4 justify-center">
            <Text className="border-r-2 w-32 text-black">
              {' '}
              Rating: {item.rating}{' '}
            </Text>
            {/* <Text className="text-black w-32 text-center">
            {' '}
            Count: {item?.rating?.count}
          </Text> */}
            <Text className="text-black w-32 text-center">
              {' '}
              Stock: {item.stock}
            </Text>
          </View>

          {/* buttons */}
          <View className="flex flex-row justify-around mt-6">
            <TouchableOpacity
              className="w-32 h-8 bg-textColor rounded-lg"
              onPress={handleAddToCart}>
              <Text className="text-center text-grayColor text-md mt-1">
                {' '}
                Add To Cart{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-32 h-8 bg-blueColor rounded-lg"
              onPress={() => navigation.navigate('buy-now')}>
              <Text className="text-center text-grayColor text-md mt-1">
                {' '}
                Buy Now{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

      {/* for displaying the image */}
      {displayOnScreen && (
        <View>
          <TouchableOpacity
            className="absolute z-50 p-4"
            onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={36} />
          </TouchableOpacity>
          <Image
            source={{uri: `${imageData}`}}
            className="h-full w-full"
            resizeMode="contain"
          />
        </View>
      )}
    </SafeAreaView>
  );
}
