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
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Button from "./Button"

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handlePress = () => {
    navigation.navigate('Registration')

  }
  const handleUserChange = (user) => {
    setUsername(user)
  }  
  const handlePassChange = (password) => {
    setPassword(password)
    
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
        <Text style={styles.labels}>User Name:</Text>
        <TextInput value={username} onChange={handleUserChange} style={styles.input} />
      </View>
      <View>
        <Text style={styles.labels}>Password:</Text>
        <TextInput value={password} onChange={handlePassChange}style={styles.input} />
      </View>
      <View>
        <Button style={{ ...styles.button, marginTop: 10 }} text="Log in" onPress={handlePress}></Button>
      </View>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Text style={{ ...styles.labels, color: 'red', margin: 0 }}>L</Text>
      <Text style={{ ...styles.labels, margin: 0 }}>ogin with</Text>
    </View>
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Button style={{ ...styles.button, backgroundColor: 'blue', width: screen.width / 3 }} text="facebook" />
      <Button style={{ ...styles.button, backgroundColor: 'black', width: screen.width / 3, marginLeft: 0 }} text="twitter" />
    </View>
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Text style={{ ...styles.labels, color: 'red', margin: 0 }}>or </Text>
      <Text style={{ ...styles.labels, margin: 0 }}>Register</Text>
    </View>
  </SafeAreaView>
}
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {

  },
  rContainer: {
    display: 'flex',
    justifyContent: 'flex-start',

  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 39
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 80,
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
    backgroundColor: 'red',
    borderWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    height: 50,
    borderRadius: 20,
    padding: 15,
    display: 'flex',
    alignItems: 'center'
  }
})
