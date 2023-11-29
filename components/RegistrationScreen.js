import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {useState} from 'react'
import Button from './Button'
const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [dob, setDob] = useState();
  const handleRegisterPress = () => {
    navigation.navigate('Login')
  }
  const handleEmailChange = (value) => {
    setEmail(value)
  }  
  const handleUsernameChange = (value) => {
    setUsername(value)
  }  
  const handlePasswordChange = (value) => {
    setPassword(value)
  }  
  const handleAddressChange = (value) => {
    setAddress(value)
  }  
  const handleDobChange = (value) => {
    setDob(value)
  }  
  
  return <SafeAreaView style={styles.container}>
    <View style={styles.logoContainer}>
      <View style={styles.rContainer}>
        <Image source={require('../images/ourLogo.png')} style={styles.logoImage}></Image>
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.text}>guide</Text>
        </View>
        <View>
          <Text style={styles.text}>your</Text>
        </View>
        <View>
          <Text style={styles.text}>guide</Text>
        </View>
      </View>
    </View>
    <View>
      <View>
        <Text style={styles.labels}>Email:</Text>
        <TextInput value={email} onChange={handleEmailChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>User Name:</Text>
        <TextInput value={username} onChange={handleUsernameChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Password:</Text>
        <TextInput value={password} onChange={handlePasswordChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Address:</Text>
        <TextInput value={address} onChange={handleAddressChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Date of Birth:</Text>
        <TextInput value={dob} onChange={handleDobChange} style={styles.input} />
      </View>
      <Button style={{...styles.button}} text='Register' onPress={handleRegisterPress}></Button>
    </View>

  </SafeAreaView>
}
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: screen.width,
    height: screen.height
  },
  rContainer: {
    display: 'flex',
    justifyContent: 'center',

  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 39,
    width: screen.width / 2,
    height: screen.height / 5
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    justifyContent: 'center'
  },
  text: {
    color: 'gray',
    fontSize: 20,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 1,
    fontWeight: 'bold',

  },
  logoImage: {
    width: screen.width / 3.5,
    height: screen.height / 3.5,
    marginLeft: 20,
    resizeMode: 'contain',

  },
  input: {
    width: screen.width / 1.3,
    backgroundColor: 'white',
    borderWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    height: 50,
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
  }
})


export default RegistrationScreen;