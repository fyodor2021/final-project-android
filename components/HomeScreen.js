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
import { useState, useLayoutEffect } from 'react';
import Button from './Button'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default function HomeScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false)
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
      headerLeft: () => {
        return <TouchableOpacity style={{ marginLeft: 0 }} onPress={() => navigation.goBack()}>
          <View style={styles.backButton} >
            <Image source={require('../images/goBack.png')} style={{ ...styles.backImage, width: 50, height: 50 }} />
          </View>

        </TouchableOpacity>
      },
      headerRight: () => {
        return <TouchableOpacity style={{ marginLeft: 0 }} onPress={() => setMenuVisible(!menuVisible)}>
          {
            !menuVisible ?
              <View style={{ ...styles.backButton, marginRight: 3 }} >
                <Image source={require('../images/hamburgerMenu.png')} style={{ ...styles.backImage, width: 20, height: 20, marginRight: 0 }} />

              </View> :
              <SafeAreaView style={styles.menuContainer}>
                <Button style={{ ...styles.button, ...styles.menuItems }} text='Edit' onPress={() => navigation.navigate('Edit')}></Button>
                <Button style={{ ...styles.button, ...styles.menuItems }} text='share'></Button>
                <Button style={{ ...styles.button, ...styles.menuItems, marginBottom: 25 }} text='Rate'></Button>
              </SafeAreaView>

          }


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
  })
  const handleDetailPress = () => {
    navigation.navigate('Detail')
  }
  return<TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
    <View>
      <Text>hello world</Text>
      <Button style={styles.button} text="Take me to Detailssss...." onPress={handleDetailPress}></Button>
    </View>
  </TouchableWithoutFeedback>

}

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  menuContainer: {
    borderWidth: 1,
    backgroundColor: "#850101",
    marginTop: 50,
    borderRadius: 30,
    opacity: .9,
    shadowColor: 'black',
    shadowWidth: 1,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: .5,
    marginRight: 5
  },
  menuItems: {
    justifyContent: 'center',
    shadowColor: 'black',
    shadowWidth: 1,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: .5
  },

  button: {
    width: screen.width / 1.3,
    backgroundColor: '#ff5757',
    borderWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 25,
    height: 50,
    borderRadius: 20,
    padding: 15,
    display: 'flex',
    alignItems: 'center',

  },
  searchContainer: {
    display: 'flex',
    alignItems: 'baseline',
    width: screen.width / 1.6,
  },
  searchInput: {
    width: screen.width / 1.6,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 10,
    padding: 8
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