import {
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
    View,
    ImageBackground,
  } from 'react-native';
import {useState} from 'react'
import Button from './Button'
import Input from './Input'
export default function EditScreen({navigation}){
  navigation.setOptions({
    title:'',
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
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState({});
  const handleNameChange = () => {
    
  }
  const handleAddressChange = () => {
    
  }
  const handlePhoneNumberChange= () => {
    
  }
  const handleDescChange = () => {
    
  }
  const handleTagsChange = () => {
    
  }
  const handleEditPress = () => {

  }
    return  <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../images/restaurant.jpg')} style={styles.backgroundImage}>
        <Button style={styles.uploadButton} text='Upload'></Button>
    </ImageBackground>
      
    <View>
      <Input label='Resturant Name:'/>
      <Input label='Address:'/>
      <Input label='Phone Number:'/>
      <Input label='Description:'/>
      <Input label='Restaurant Tag:'/>
      <Button style={{...styles.button}} text='Edit' onPress={handleEditPress}></Button>
    </View>

  </SafeAreaView>
}

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  input: {
    width: screen.width / 1.3,
    backgroundColor: 'white',
    borderWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    height: 40,
    borderRadius: 20,
    padding: 15
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
    width: screen.width / 2.5,
    backgroundColor: 'gray',
    height: 30,
    borderRadius: 20,
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
    opacity:.7,
  },
  backgroundImage:{
    width:screen.width,
    height: screen.height/3.5,
    justifyContent:'center',
    alignItems:'center'
  }
})