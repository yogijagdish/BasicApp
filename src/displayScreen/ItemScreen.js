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
} from 'react-native';

// importing libraries for react icons
import AntDesign from 'react-native-vector-icons/AntDesign';

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
  const [duplicateItem, setDuplicateItem] = useState('');
  const [imageData, setImageData] = useState('');

  //  functions

  // add to cart button
  const handleAddToCart = () => {
    const unique_item = cartItem.includes(id);
    if (!unique_item) {
      dispatch(setItemToCart(id));
    } else {
      setDuplicateItem('This Item already exists');
    }
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
      {image.map((item, index) => (
        <TouchableOpacity onPress={() => handleTouchImage(item)}>
          <Image
            key={index}
            source={{
              uri: `${item}`,
            }}
            className="h-16 w-16 ml-4"
            resizeMode="contain"
          />
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
                <AntDesign name="arrowleft" color="black" size={30} />
              </Pressable>
              <Text className="text-lg ml-4 font-extrabold text-black">
                {' '}
                Product details{' '}
              </Text>
            </View>
            <Pressable onPress={() => navigation.navigate('cart')}>
              <Text className="text-lg text-black">
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
            <Text className="text-lg font-extrabold text-bold text-black">
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
              className="w-32 h-8 bg-yellow-400 rounded-lg"
              onPress={handleAddToCart}>
              <Text className="text-center text-md mt-1"> Add To Cart </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-32 h-8 bg-blue-400 rounded-lg"
              onPress={() => navigation.navigate('buy-now')}>
              <Text className="text-center text-md mt-1"> Buy Now </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-red-700 mt-4 ml-4 font-bold text-lg">
            {' '}
            {duplicateItem}{' '}
          </Text>
        </ScrollView>
      )}

      {/* for displaying the image */}
      {displayOnScreen && (
        <View>
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
