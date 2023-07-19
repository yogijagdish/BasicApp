// importing necessary libraries from react
import React, {useState} from 'react';
// importing necessary components from react-native
import {
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
// import for maps and location
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

// main functions
export default function LocationMaps() {
  // local state for location
  const [locationData, setLocationData] = useState({
    accuracy: null,
    altitude: null,
    bearing: null,
    latitude: null,
    longitude: null,
    provider: null,
    speed: null,
    time: null,
  });

  // asking for location permissions
  const requestLocationPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permissions',
            message: 'App needs your Location Access',
            buttonNeutral: 'Ask me later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        console.log(granted);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        return false;
      }
    } else {
      return true;
    }
  };

  // triggers when we click the button
  const handleLocationButton = async () => {
    let isLocationPermitted = await requestLocationPermissions();
    console.log(isLocationPermitted);
    if (isLocationPermitted) {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          setLocationData({
            ...locationData,
            accuracy: location.accuracy,
            altitude: location.altitude,
            bearing: location.bearing,
            latitude: location.latitude,
            longitude: location.longitude,
            speed: location.speed,
            provider: location.provider,
            time: location.time,
          });
          console.log(locationData);
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message);
          Alert.alert(`${code}`, `${message}`);
        });
    }
  };
  // main return
  return (
    <View>
      <View className="p-6">
        <Text className="text-2xl"> Set Your</Text>
        <Text className="text-3xl font-bold text-textColor"> Location </Text>
      </View>
      {/* shows the location in maps */}
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: locationData.latitude || 22.24863,
          longitude: locationData.longitude || 82.23451,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="h-1/2 w-screen"
      />
      {/* button */}
      <TouchableOpacity
        className="flex items-center p-8"
        onPress={handleLocationButton}>
        <Text className="p-2 bg-blueColor rounded-2xl text-whiteColor">
          {' '}
          Get your real location{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
