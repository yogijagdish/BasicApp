// importing necessary libraries from react
import React, {useState} from 'react';

// importing necessary components from react-native
import {
  Text,
  View,
  StatusBar,
  Modal,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
// safe - area - view
import {SafeAreaView} from 'react-native-safe-area-context';

// icons import
import Ionicons from 'react-native-vector-icons/Ionicons';

// api import
import {useAuthUserAPIMutation} from '../redux/services/apiHandle';

// importing for the selector and dispatcher from store
import {useDispatch} from 'react-redux';
import {
  setUsername,
  setTitle,
  setEmail,
  setImage,
} from '../redux/features/userDataSlice';

// use case to display either sigin or signup or starting
export default function StartingScreen({navigation}) {
  const [isStartVisible, setStartVisible] = useState(true);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isSignupVisible, setSignupVisible] = useState(false);

  // handles the lets get started button
  const handleLetsStart = () => {
    setStartVisible(false);
    setLoginVisible(true);
    setSignupVisible(false);
  };

  // stores the username and password entered by the user
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
  });

  // creating a object
  const [data, {isLoading, isSuccess, isError, isFetching}] =
    useAuthUserAPIMutation();

  // updates the useState
  const handleInputChange = (key, value) => {
    setUserCredentials({...userCredentials, [key]: value});
  };

  const dispatch = useDispatch();

  // handles the sigin button
  const handleSignin = async () => {
    console.log(userCredentials);
    navigation.navigate('bottom-tab');
    setStartVisible(false);
    setLoginVisible(false);
    setSignupVisible(false);
    const response = await data(userCredentials);
    if (response.error) {
      console.log(response.error);
    }
    if (response.data) {
      dispatch(setUsername(response.data.username));
      dispatch(
        setTitle(response.data.firstName + ' ' + response.data.lastName),
      );
      dispatch(setEmail(response.data.email));
      dispatch(setImage(response.data.image));
      console.log(response);
      navigation.navigate('bottom-tab');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* status bar */}
        <StatusBar backgroundColor="#1e40af" />
        {/* arrow and link */}
        <View className="bg-blueColor h-screen">
          {/* name */}
          <View className="p-16">
            <Text className="text-whiteColor text-center text-4xl"> Name </Text>
          </View>
          {/* starting screen modal */}
          <Modal
            animationType="slide"
            transparent={true}
            animationDuration={5000}
            visible={isStartVisible}>
            <View className="flex items-end p-4">
              <TouchableOpacity
                onPress={() => {
                  setStartVisible(false);
                  setLoginVisible(false);
                  setSignupVisible(true);
                }}>
                <Text className="text-whiteColor opacity-80">
                  {' '}
                  Don't have an account?{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-1 justify-end h-1/4">
              <View className="h-3/4 bg-whiteColor rounded-t-3xl">
                <Text className="text-3xl text-grayColor mt-6 text-center font-bold">
                  {' '}
                  Welcome{' '}
                </Text>
                <Text className="text-center text-lg text-grayColor mt-2">
                  {' '}
                  Lets Start from here{' '}
                </Text>
                <TouchableOpacity
                  className="mx-auto my-auto p-2 w-72 bg-blueColor rounded-full"
                  onPress={handleLetsStart}>
                  <Text className="text-whiteColor font-bold text-lg text-center">
                    {' '}
                    Let's Get Started{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* login modal */}
          <Modal
            animationType="slide"
            transparent={true}
            animationDuration={5000}
            visible={isLoginVisible}>
            <View className="flex flex-row justify-between p-4 bg-opacity-50">
              <TouchableOpacity
                onPress={() => {
                  setStartVisible(true);
                  setLoginVisible(false);
                  setSignupVisible(false);
                }}>
                <Ionicons name="chevron-back-outline" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setStartVisible(false);
                  setLoginVisible(false);
                  setSignupVisible(true);
                }}>
                <Text className="text-whiteColor opacity-80">
                  {' '}
                  Don't have an account?{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-1 justify-end h-1/4">
              <View className="h-3/4 bg-whiteColor rounded-t-3xl">
                <Text className="text-3xl text-grayColor mt-6 text-center font-bold">
                  {' '}
                  Welcome Back{' '}
                </Text>
                <Text className="text-center text-lg text-grayColor mt-2">
                  {' '}
                  Enter your details below{' '}
                </Text>
                <View className="flex items-center gap-4 pt-6">
                  <TextInput
                    className="border-2 rounded-2xl w-80"
                    placeholder="Enter your Email Address or Username"
                    onChangeText={value => handleInputChange('username', value)}
                  />
                  <TextInput
                    className="border-2 rounded-2xl w-80"
                    placeholder="Enter your password here"
                    secureTextEntry={true}
                    onChangeText={value => handleInputChange('password', value)}
                  />
                  <TouchableOpacity
                    className="h-14 w-80 rounded-xl bg-blueColor"
                    onPress={handleSignin}>
                    <Text className="p-4 text-center text-whiteColor">
                      {' '}
                      Sign in{' '}
                    </Text>
                  </TouchableOpacity>
                  <Text className="font-bold"> Forget your password? </Text>
                </View>
                <View>
                  <Text className="text-center pt-16"> Or sign in with </Text>
                  <View className="p-6 flex flex-row justify-between gap-16">
                    <TouchableOpacity className="flex flex-row border-2 w-32 h-10 p-2 rounded-lg">
                      <Image
                        source={{
                          uri: 'https://icon2.cleanpng.com/20180419/hkq/kisspng-google-logo-google-search-google-account-redes-5ad81f9d48aa16.8210485215241133092976.jpg',
                        }}
                        className="h-4 w-6"
                        resizeMode="contain"
                      />
                      <Text className="font-bold text-grayColor"> Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row border-2 w-32 h-10 p-2 rounded-lg">
                      <Image
                        source={{
                          uri: 'https://i.pinimg.com/474x/f7/99/20/f79920f4cb34986684e29df42ec0cebe.jpg',
                        }}
                        className="h-6 w-8"
                        resizeMode="contain"
                      />
                      <Text className="font-bold text-grayColor">
                        {' '}
                        Facebook
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          {/* signup modal */}
          <Modal
            animationType="slide"
            transparent={true}
            animationDuration={5000}
            visible={isSignupVisible}>
            <TouchableOpacity
              className="p-4"
              onPress={() => {
                setStartVisible(false);
                setLoginVisible(true);
                setSignupVisible(false);
              }}>
              <Ionicons name="chevron-back-outline" size={24} color="white" />
            </TouchableOpacity>
            <View className="flex-1 justify-end h-1/4">
              <View className="h-3/4 bg-whiteColor rounded-t-3xl">
                <Text className="text-3xl text-grayColor mt-6 text-center font-bold">
                  {' '}
                  Sign Up{' '}
                </Text>
                <Text className="text-center text-lg text-grayColor mt-2">
                  {' '}
                  Register yourself here{' '}
                </Text>
                <View className="flex items-center gap-4 pt-6">
                  <TextInput
                    className="border-2 rounded-2xl w-80"
                    placeholder="Enter your username"
                    onChangeText={value => handleInputChange('username', value)}
                  />
                  <TextInput
                    className="border-2 rounded-2xl w-80"
                    placeholder="Enter your Email Address or Username"
                    onChangeText={value => handleInputChange('username', value)}
                  />
                  <TextInput
                    className="border-2 rounded-2xl w-80"
                    placeholder="Enter your password here"
                    onChangeText={value => handleInputChange('password', value)}
                  />
                  <TouchableOpacity
                    className="h-14 w-80 rounded-xl bg-blueColor"
                    onPress={handleSignin}>
                    <Text className="p-4 text-center text-whiteColor">
                      {' '}
                      Sign in{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text className="text-center pt-16"> Or sign in with </Text>
                  <View className="p-6 flex flex-row justify-between gap-16">
                    <TouchableOpacity className="flex flex-row border-2 w-32 h-10 p-2 rounded-lg">
                      <Image
                        source={{
                          uri: 'https://icon2.cleanpng.com/20180419/hkq/kisspng-google-logo-google-search-google-account-redes-5ad81f9d48aa16.8210485215241133092976.jpg',
                        }}
                        className="h-4 w-6"
                        resizeMode="contain"
                      />
                      <Text className="font-bold text-grayColor"> Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row border-2 w-32 h-10 p-2 rounded-lg">
                      <Image
                        source={{
                          uri: 'https://i.pinimg.com/474x/f7/99/20/f79920f4cb34986684e29df42ec0cebe.jpg',
                        }}
                        className="h-6 w-8"
                        resizeMode="contain"
                      />
                      <Text className="font-bold text-grayColor">
                        {' '}
                        Facebook
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
