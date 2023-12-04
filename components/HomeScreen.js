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
  TextInput
} from 'react-native';
import { useState, useLayoutEffect, useContext } from 'react';
import Button from './Button'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-auth';
import UserContext from './context/UserContext';
import LoginScreen from './LoginScreen';
export default function HomeScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false)
  const { signedState } = useContext(UserContext)
  const [signedIn, setSignedIn] = signedState
  const handleLogoutPress = () => {
    signOut(auth).then()
      .catch(error => console.log(error))
      setSignedIn(!signedIn)
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder='Search' />
        </View>
      },
      headerTitleContainerStyle: {
        marginLeft: 0
      },
      headerLeft: null
      ,
      headerRight: () => {
        return <TouchableOpacity style={{ marginLeft: 0 }} onPress={() => setMenuVisible(!menuVisible)}>
          <View style={{ ...styles.backButton, marginRight: 3 }} >
            <Image source={require('../images/hamburgerMenu.png')} style={{ ...styles.backImage, width: 20, height: 20, marginRight: 0 }} />
          </View>
        </TouchableOpacity>
      },
      headerStyle: {
        backgroundColor: '#ff5757',

      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    })
  },[menuVisible])
  const handleDetailPress = () => {
    navigation.navigate('Detail')
  }
  return <SafeAreaView style={{ width: '14444' }}><TouchableWithoutFeedback>{!menuVisible ?
    <View>
      <Button style={styles.detailsButton} text="Take me to Detailssss...." onPress={handleDetailPress}></Button>
    </View > : <SafeAreaView style={styles.menuContainer}>
      <Button style={{ ...styles.button, ...styles.menuItems }} text='Edit' onPress={() => navigation.navigate('Edit')}></Button>
      <Button style={{ ...styles.button, ...styles.menuItems }} text='share'></Button>
      <Button style={{ ...styles.button, ...styles.menuItems }} text='Rate'></Button>
      <Button style={{ ...styles.button, ...styles.menuItems, marginBottom: 25 }} onPress={handleLogoutPress} text='Logout'></Button>

    </SafeAreaView>}</TouchableWithoutFeedback></SafeAreaView>
}



const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  menuContainer: {
    borderWidth: 1,
    backgroundColor: "#850101",
    borderRadius: 30,
    opacity: .9,
    shadowColor: 'black',
    shadowWidth: 1,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: .5,
    width: screen.width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuItems: {
    justifyContent: 'center',
    shadowColor: 'black',
    shadowWidth: 1,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: .5,
    width: screen.width / 2,

  },
  detailsButton:{
    width: screen.width,
    height: 50,
    backgroundColor: '#ff5757',
  },
  button: {
    justifyContent: 'center',
    width: 90,
    backgroundColor: '#ff5757',
    borderWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 25,
    height: 50,
    borderRadius: 20,
    padding: 10,
    display: 'flex',
    alignItems: 'center',

  },
  searchContainer: {
    display: 'flex',
    alignItems: 'baseline',
    width: screen.width,
  },
  searchInput: {
    width: screen.width / 1.2,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 10,
    padding: 8,
    marginLeft: 10,
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