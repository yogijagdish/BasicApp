import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

const tempImage = require('../Images/blank_picture.jpg');

export default function EditDetail() {
  const [userData, setUserData] = useState({
    username: '',
    title: '',
    email: '',
    mobile: '',
    twitter: '',
  });

  const handleInputChange = ({key, value}) => {
    setUserData(preData => ({
      ...preData,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(userData);
  };

  return (
    <View>
      <View className="flex items-center mt-8">
        <Image className="h-32 w-32 rounded-full" source={tempImage} />
      </View>
      <View className="ml-8 mt-8">
        <Text className="font-bold text-md color-gray-400"> Username </Text>
        <TextInput
          className="border-2 w-64 h-10 mt-2 rounded-md border-gray-400"
          onChangeText={value => handleInputChange('username', value)}
        />
        <Text className="font-bold text-md color-gray-400 mt-4"> Title </Text>
        <TextInput
          className="border-2 w-64 h-10 mt-2 rounded-md border-gray-400"
          onChangeText={value => handleInputChange('title', value)}
        />
        <Text className="font-bold text-md color-gray-400 mt-4"> Email </Text>
        <TextInput
          className="border-2 w-64 h-10 mt-2 rounded-md border-gray-400"
          onChangeText={value => handleInputChange('email', value)}
        />
        <Text className="font-bold text-md color-gray-400 mt-4"> Mobile </Text>
        <TextInput
          className="border-2 w-64 h-10 mt-2 rounded-md border-gray-400"
          onChangeText={value => handleInputChange('mobile', value)}
        />
        <Text className="font-bold text-md color-gray-400 mt-4"> Twitter </Text>
        <TextInput
          className="border-2 w-64 h-10 mt-2 rounded-md border-gray-400"
          onChangeText={value => handleInputChange('twitte', value)}
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
    </View>
  );
}
