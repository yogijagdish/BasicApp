// importing react libraries
import React, {useState} from 'react';

// importing components from react native
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';

// redux import
import {useSelector, useDispatch} from 'react-redux';
import {
  setUsername,
  setTitle,
  setMobile,
  setEmail,
  setTwitter,
} from '../redux/features/userDataSlice';

// importing the libraries from image picker
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// main function
export default function EditDetail({navigation}) {
  // dispatch object for dispatching actions
  const dispatch = useDispatch();

  // filepath state for storing the image path and show camera options to choose between camera and gallary
  const [filePath, setFilePath] = useState({});
  const [showCameraOptions, setShowCameraOptions] = useState(false);

  // for updating details
  const [userData, setUserData] = useState({
    username: '',
    title: '',
    email: '',
    mobile: '',
    twitter: '',
  });

  // reading the state from global state
  const username = useSelector(state => state.data.username);
  const title = useSelector(state => state.data.title);
  const email = useSelector(state => state.data.email);
  const mobile = useSelector(state => state.data.mobile);
  const twitter = useSelector(state => state.data.twitter);
  const image = useSelector(state => state.data.image);

  // updates the useState when changed
  const handleInputChange = (key, value) => {
    setUserData({...userData, [key]: value});
  };

  // dispatch actions on clicking submit
  const handleSubmit = () => {
    dispatch(setUsername(userData.username));
    dispatch(setTitle(userData.title));
    dispatch(setEmail(userData.email));
    dispatch(setMobile(userData.mobile));
    dispatch(setTwitter(userData.twitter));
  };

  // asking for camera and memory permissions
  const requestCameraPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permissions',
            message: 'App needs camera permissions',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        console.log(granted);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  // asking for memory permissions
  const requestMemoryPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Access your storage',
            message: 'App want to access your storage',
            buttonNeutral: 'Ask me later',
            buttonNegative: 'Cancel',
            buttonPositive: 'Ok',
          },
        );
        console.log('storage:', granted);
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  // capturing image
  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30,
      saveToPhotos: true,
    };
    setShowCameraOptions(false);
    let isCameraPermitted = await requestCameraPermissions();
    let isStoragePermitted = await requestMemoryPermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response =', response);

        if (response.didCancel) {
          Alert.alert('Camera access rejected');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          Alert.alert('Camera not available on this device');
          return;
        } else if (response.errorCode == 'permission') {
          Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          Alert.alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.assets[0].base64);
        console.log('uri -> ', response.assets[0].uri);
        console.log('width ->', response.assets[0].width);
        console.log('height -> ', response.assets[0].height);
        console.log('fileSize -> ', response.assets[0].fileSize);
        console.log('type -> ', response.assets[0].type);
        console.log('fileName -> ', response.assets[0].fileName);
        setFilePath(response);
      });
    }
  };

  // choosing the file from gallary
  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxHeight: 550,
      maxWidth: 300,
      quality: 1,
    };
    setShowCameraOptions(false);
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        Alert.alert('User cancelled gallery access');
        return;
      } else if (response.errorCode == 'camera unavailable') {
        Alert.alert('Camera not available on this device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.assets[0].base64);
      console.log('uri -> ', response.assets[0].uri);
      console.log('width ->', response.assets[0].width);
      console.log('height -> ', response.assets[0].height);
      console.log('fileSize -> ', response.assets[0].fileSize);
      console.log('type -> ', response.assets[0].type);
      console.log('fileName -> ', response.assets[0].fileName);
      setFilePath(response);
    });
  };

  // shows the modal when image is clicked
  const handleImagePress = () => {
    console.log('pressed');
    setShowCameraOptions(true);
  };

  // return fucntion
  return (
    <ScrollView>
      <View className="flex items-center mt-8">
        {/* image  */}
        <Image className="h-32 w-32 rounded-full" source={{uri: `${image}`}} />
        <TouchableOpacity onPress={() => handleImagePress()}>
          <Text className="pt-4 text-blueColor font-bold"> Update Image </Text>
        </TouchableOpacity>
      </View>
      {/* username, title and other fields */}
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
      {/* modal that becomes visible only when image is clicked */}
      <Modal
        animationType="slide"
        transparent={true}
        animationDuration={5000}
        visible={showCameraOptions}>
        <TouchableOpacity
          className="flex items-end p-4"
          onPress={() => setShowCameraOptions(false)}>
          <Text className="text-grayColor font-bold"> close </Text>
        </TouchableOpacity>
        <View className="flex-1 justify-center items-center gap-6">
          <TouchableOpacity
            className="border-2 p-2 w-32 h-10"
            onPress={() => captureImage('photos')}>
            <Text className="font-bold"> Open Camera </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border-2 p-2 w-32 h-10"
            onPress={() => {
              chooseFile('photos');
            }}>
            <Text className="font-bold"> Choose from Gallary </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}
