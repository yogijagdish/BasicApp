import React from 'react';

import {Text, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

export default function User() {
  return (
    <View>
      <Text> This is for user </Text>
      <AntDesign name="caretup" color="red" size={30} />
    </View>
  );
}
