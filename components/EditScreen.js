import {
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  ImageBackground,
  Text,
  TextInput,
} from 'react-native';
import { useState } from 'react'
import Button from './Button'
import { addRestaurant } from './Model';
import * as ImagePicker from 'expo-image-picker'
import imagePlaceholder from '../assets/restaurant-image-placeholder.png'
import { getMultiFactorResolver } from 'firebase/auth';
export default function EditScreen({ navigation, route }) {
    const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState('');
  const [imageUri, setImageUri] = useState('')
  let imageResults = {};
  navigation.setOptions({
    title: '',
    headerStyle: {
      backgroundColor: '#ff5757',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: () => {
      return <TouchableOpacity style={{ marginLeft: 0 }} onPress={() => navigation.goBack()}>
        <View style={styles.backButton} >
          <Image source={require('../images/goBack.png')} style={{ ...styles.backImage, width: 50, height: 50 }} />
        </View>
      </TouchableOpacity>
    }
  })
  const handleCameraUpload = async () => {
    try{
      await ImagePicker.requestCameraPermissionsAsync();
      imageResults = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        quality: 1
      })
      if(!imageResults.canceled){
        console.log(imageResults.assets[0].uri)
        await saveImage(imageResults.assets[0].uri);
      }
    }catch(error){
      alert(error)
    }
  }
  const handleImageUpload = async (mode) => {
    if(mode == 'gallary'){
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      imageResults = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1
      })
    }
    if(!imageResults.canceled){
      console.log(imageResults.assets[0].uri)
      await saveImage(imageResults.assets[0].uri);
    }
  }
  const saveImage = async (image) => {
    try{setImageUri(image)}catch(error){console.log(error)}
  } 
  const handleEditPress = () => {

  }
  const handleAddPress = () => {
    const restaurant = {
      name,
      address,
      phone_number : phoneNumber,
      description : desc,
      tags,
      image_data : imageUri
    }
    console.log(restaurant)
    let empty = false
    for (let key in restaurant) {
      if (restaurant[key] == '') {
        empty = true
        break; 
      }
    }

    if (!empty) {
      addRestaurant(restaurant);
    } else {
      alert('All fields must be filled');
    }
  }
  const handleNameChange =(event) => {
    setName(event)
  }
  const handleAddressChange =(event) => {
    setAddress(event)
  }
  const handlePhoneChange =(event) => {
    setPhoneNumber(event)
  }
  const handleDescChange =(event) => {
    setDesc(event)
  }
  const handleTagChange =(event) => {
    setTags(event)
  }
  return (
    route.params.restaurant ? (<SafeAreaView style={styles.container}>
    <View style={styles.backgroundImageContainer}>
      <ImageBackground source={require('../assets/restaurant-image-placeholder.png')} style={styles.backgroundImage}>
        <Button style={styles.uploadButton} text='Camera' onPress={handleCameraUpload}></Button>
        <Button style={styles.uploadButton} text='Upload' onPress={()=> handleImageUpload('gallary')}></Button>
      </ImageBackground>
      </View>
      <View>
      <View>
        <Text style={styles.labels}>Resturant Name:</Text>
        <TextInput value={name} autoCapitalize='none' onChangeText={handleNameChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Address: </Text>
        <TextInput value={address} autoCapitalize='none' onChangeText={handleAddressChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Phone Number:</Text>
        <TextInput value={phoneNumber} autoCapitalize='none' onChangeText={handlePhoneChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Description: </Text>
        <TextInput value={desc} autoCapitalize='none' onChangeText={handleDescChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Restaurant Tag:</Text>
        <TextInput value={tags} autoCapitalize='none' onChangeText={handleTagChange} style={styles.input} />
      </View>
        <Button style={{ ...styles.button }} text='Edit' onPress={handleEditPress}></Button>
      </View>
    </SafeAreaView>) : (<SafeAreaView style={styles.container}>
      <View style={styles.backgroundImageContainer}>
      <ImageBackground source={imageUri ? {uri:imageUri} : imagePlaceholder} style={styles.restaurantPlaceholder}>

      <Button style={styles.uploadButton} text='Camera' onPress={handleCameraUpload}></Button>
        <Button style={styles.uploadButton} text='Upload' onPress={() => handleImageUpload('gallary')}></Button>
      </ImageBackground>
      </View>
      <View>
      <View>
        <Text style={styles.labels}>Resturant Name:</Text>
        <TextInput value={name} autoCapitalize='none' onChangeText={handleNameChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Address: </Text>
        <TextInput value={address} autoCapitalize='none' onChangeText={handleAddressChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Phone Number:</Text>
        <TextInput value={phoneNumber} autoCapitalize='none' onChangeText={handlePhoneChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Description: </Text>
        <TextInput value={desc} autoCapitalize='none' onChangeText={handleDescChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Restaurant Tag:</Text>
        <TextInput value={tags} autoCapitalize='none' onChangeText={handleTagChange} style={styles.input} />
      </View>
        <Button style={{ ...styles.button }} text='Add' onPress={handleAddPress}></Button>
      </View>
    </SafeAreaView>

    )
    )
}

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  restaurantPlaceholder:{
    width: screen.width,
    height: screen.height / 4,
    justifyContent:'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },  
  backgroundImageContainer:{
    width:screen.width,
    alignItems: 'center'
  },
  input: {
    width: screen.width / 1.3,
    backgroundColor: 'white',
    borderWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    height: 40,
    borderRadius: 20,
    padding: 10
  },
  labels: {
    fontSize: 20,
    margin: 50,
    marginBottom: 5,
    marginTop: 5,
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: screen.width / 1.3,
    backgroundColor: '#ff5757',
    borderWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    height: 50,
    borderRadius: 20,
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    marginTop: 25
  },
  uploadButton: {
    width: screen.width / 5,
    backgroundColor: 'gray',
    height: 30,
    borderRadius: 20,
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    opacity: .7,
  },
  backgroundImage: {
    width: screen.width,
    height: screen.height / 3.5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})