import React from 'react';

import {Button, Text, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {setData} from '../redux/features/userDataSlice';

export default function PermissionScreen() {
  const data = useSelector(state => state.data.data);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setData('hello'));
  };

  return (
    <View>
      <Text> This is for permission screen {data} </Text>
      <Button title="click me" onPress={handleClick} />
    </View>
  );
}
