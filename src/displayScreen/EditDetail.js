import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';

const tempImage = require('../Images/blank_picture.jpg');

import {useSelector, useDispatch} from 'react-redux';
import {
  setUsername,
  setTitle,
  setMobile,
  setEmail,
  setTwitter,
} from '../redux/features/userDataSlice';

export default function EditDetail({navigation}) {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: '',
    title: '',
    email: '',
    mobile: '',
    twitter: '',
  });

  const username = useSelector(state => state.data.username);
  const title = useSelector(state => state.data.title);
  const email = useSelector(state => state.data.email);
  const mobile = useSelector(state => state.data.mobile);
  const twitter = useSelector(state => state.data.twitter);

  const handleInputChange = (key, value) => {
    setUserData({...userData, [key]: value});
  };

  const handleSubmit = () => {
    dispatch(setUsername(userData.username));
    dispatch(setTitle(userData.title));
    dispatch(setEmail(userData.email));
    dispatch(setMobile(userData.mobile));
    dispatch(setTwitter(userData.twitter));
  };

  const handleProfileClick = () => {
    navigation.navigate('permission');
  };

  return (
    <ScrollView>
      <View className="flex items-center mt-8">
        <Pressable onPress={handleProfileClick}>
          <Image className="h-32 w-32 rounded-full" source={tempImage} />
        </Pressable>
      </View>
      <View className="ml-8 mt-8">
        <Text className="font-bold text-md color-gray-400"> Username </Text>
        <TextInput
          className="border-2 w-64 h-10 mt-2 rounded-md border-gray-400"
          placeholder={username}
          onChangeText={value => handleInputChange('username', value)}
        />
        <Text className="font-bold text-md color-gray-400 mt-4"> Title </Text>
        <TextInput
          className="border-2 w-64 h-10 mt-2 rounded-md border-gray-400"
          placeholder={title}
          onChangeText={value => handleInputChange('title', value)}
        />
        <Text className="font-bold text-md color-gray-400 mt-4"> Email </Text>
        <TextInput
          className="border-2 w-64 h-10 mt-2 rounded-md border-gray-400"
          placeholder={email}
          onChangeText={value => handleInputChange('email', value)}
        />
        <Text className="font-bold text-md color-gray-400 mt-4"> Mobile </Text>
        <TextInput
          className="border-2 w-64 h-10 mt-2 rounded-md border-gray-400"
          placeholder={mobile}
          onChangeText={value => handleInputChange('mobile', value)}
        />
        <Text className="font-bold text-md color-gray-400 mt-4"> Twitter </Text>
        <TextInput
          className="border-2 w-64 h-10 mt-2 rounded-md border-gray-400"
          placeholder={twitter}
          onChangeText={value => handleInputChange('twitter', value)}
        />
        <TouchableOpacity
          className="h-10 w-64 bg-blue-600 rounded-lg mt-6"
          onPress={handleSubmit}>
          <Text className="text-center text-white text-xl mt-1 font-bold">
            {' '}
            Save Profile{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
