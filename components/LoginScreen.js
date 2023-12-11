import { useState } from 'react'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { useContext } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import Button from './Button'
import UserContext from './context/UserContext';
import { signInWithEmailAndPassword } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { database, auth } from './firebase-auth'
import { ref, once, get } from 'firebase/database'
export default function LoginScreen({ navigation }) {
  console.disableYellowBox = true;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signedState } = useContext(UserContext)
  const [signedIn, setSignedIn] = signedState
  const handleEmailChange = (event) => {
    setEmail(event)
  }
  const handlePasswordChange = (event) => {
    setPassword(event)
  }
  const handleLoginPress = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCred)
      let records = []
      const usersRef = ref(database, `users`)
      await get(usersRef).then(snapshot => {
        snapshot.forEach(childSnapshot => {
          const key = childSnapshot.key
          const data = childSnapshot.val()
          console.log(data)
          records.push({ "key": key, "data": data })
        })
      })
      try {
        const user = records.filter(record => record.key == userCred.user.uid)
        await AsyncStorage.setItem('loggedInUser', JSON.stringify(user[0].data))
        setSignedIn(true)
        navigation.navigate('Home',{item:user})
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      alert('sign in failed' + error.message)
    }
  }
  const handleRegister = () => {
    navigation.navigate('Registration')
  }
  return <ScrollView automaticallyAdjustKeyboardInsets><SafeAreaView style={styles.container}>
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
        <Text style={styles.labels}>User Name:</Text>
        <TextInput value={email} autoCapitalize='none' onChangeText={handleEmailChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Password: </Text>
        <TextInput value={password} secureTextEntry={true} autoCapitalize='none' onChangeText={handlePasswordChange} style={styles.input} />
      </View>
      <View>
        <Button style={{ ...styles.button, marginTop: 10 }} text="Log in" onPress={handleLoginPress}></Button>
      </View>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Text style={{ ...styles.labels, color: '#ff5757', margin: 0 }}>L</Text>
      <Text style={{ ...styles.labels, margin: 0 }}>ogin with</Text>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Button style={{ ...styles.button, backgroundColor: 'blue', width: screen.width / 3 }} text="facebook" />
      <Button style={{ ...styles.button, backgroundColor: 'black', width: screen.width / 3, marginLeft: 0 }} text="twitter" />
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Text style={{ ...styles.labels, color: '#ff5757', margin: 0 }}>or </Text>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={{ ...styles.labels, margin: 0 }} >Register</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  </ScrollView>
}
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: screen.height,
    width: screen.width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  rContainer: {
    display: 'flex',
    justifyContent: 'center',

  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 39,
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 0,
    padding: 10
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 10
  },
  text: {
    color: 'gray',
    fontSize: 40,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 1,
    fontWeight: 'bold',
  },
  logoImage: {
    width: screen.width / 1.8,
    height: screen.height / 2.5,
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
    padding: 10,
    display: 'flex',
    alignItems: 'center'
  }
})
