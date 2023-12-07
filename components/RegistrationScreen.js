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
import { useState } from 'react'
import Button from './Button'
import { useLayoutEffect } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {database,auth} from './firebase-auth'
import {set,ref} from 'firebase/database'
const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  useLayoutEffect(() => {

    navigation.setOptions({
      headerShown: false
    })
  })
  const handleEmailChange = (event) => {
    setEmail(event)
  }
  const handleUserChange = (event) => {
    setUsername(event)
  }

  const handlePasswordChange = (event) => {
    setPassword(event)
  }
  const handleAddressChange = (event) => {
    setAddress(event)
  }
  const handleDateChange = (event) => {
    setDateOfBirth(event)
  }


  const handleRegisterPress = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await set(ref(database, `users/${userCred.user.uid}`),{
        email,
        username,
        password,
        address,
        dateOfBirth
      })
      console.log('user registered successfully');
    } catch (e) {
      console.log(e);
    }

    navigation.navigate('Login')
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
        <TextInput value={email} autoCapitalize='none' onChangeText={handleEmailChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>User Name: </Text>
        <TextInput value={username} autoCapitalize='none' onChangeText={handleUserChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Password:</Text>
        <TextInput value={password} autoCapitalize='none' onChangeText={handlePasswordChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Address: </Text>
        <TextInput value={address} autoCapitalize='none' onChangeText={handleAddressChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Date of Birth:</Text>
        <TextInput value={dateOfBirth} autoCapitalize='none' onChangeText={handleDateChange} style={styles.input} />
      </View>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Button style={{ ...styles.button, marginRight: 0, width: screen.width / 3 }} text='Back' onPress={() => navigation.goBack()}></Button>
        <Button style={{ ...styles.button, width: screen.width / 3 }} text='Register' onPress={handleRegisterPress}></Button>
      </View>
    </View>

  </SafeAreaView>
}
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    width: screen.width,
    height: screen.height,
    
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
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#ff5757',
    marginLeft: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backImage: {
    marginRight: 5
  }
})


export default RegistrationScreen;