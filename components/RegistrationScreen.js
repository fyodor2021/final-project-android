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
import {useLayoutEffect} from 'react'
import Input from './Input'
const RegistrationScreen = ({ navigation }) => {
  useLayoutEffect(() => {

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
  })

  const handleRegisterPress = () => {
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
      <Input label="Email:"/>
      <Input label="User Name:"/>
      <Input label="Password:"/>
      <Input label="Address:"/>
      <Input label="Date of Birth:"/>

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