// importing necessary libraries from react
import React, {useState} from 'react';

// importing necessary components from react-native
import {Text, View, StatusBar, ScrollView} from 'react-native';
// safe - area - view
import {SafeAreaView} from 'react-native-safe-area-context';

import StartingModal from './StartingModal';

export default function StartingScreen() {
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
        </View>
        <StartingModal isStartVisible={true} />
      </ScrollView>
    </SafeAreaView>
  );
}
