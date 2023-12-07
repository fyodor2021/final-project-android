// import { Button } from 'react-native';
import Button from './Button';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View, Dimensions
} from 'react-native';
import { useState } from 'react'

export default function DetailScreen({ navigation, route}) {
  const [menuVisible, setMenuVisible] = useState(false)
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
    },
    headerRight: () => {
      return <TouchableOpacity style={{ marginLeft: 0 }} onPress={() => setMenuVisible(!menuVisible)}>
        <View style={{ ...styles.backButton, marginRight: 3 }} >
          <Image source={require('../images/hamburgerMenu.png')} style={{ ...styles.backImage, width: 20, height: 20, marginRight: 0 }} />
        </View>
      </TouchableOpacity>
    }
  })

  const Share = () => {
    navigation.navigate('Share')
  }
  const Rate = () => {
    navigation.navigate('Rate')
  }
  return <View style={styles.wrapper}>

    <View>
      <View style={styles.container}>
      <View style={{marginRight:4}}>
        <Image style={styles.image} source={{uri: route.params.item.image_data}} />
      </View>
        <View style={styles.container2}>
          <Text style={styles.text}>Name: {route.params.item.name}</Text>
          <Text style={styles.text}>Address: {route.params.item.address}</Text>
          <Text style={styles.text}>Phone Number: {route.params.item.phone_number}</Text>
          <Text style={styles.text}>Restaurant Tags: {route.params.item.tags}</Text>
        </View>
      </View>
    </View>
    {menuVisible && (
      <View style={styles.menuWrapper}>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={{ ...styles.menuItem }}>
            <View style={styles.imageContainer}>
              <Image style={{ height: 30, width: 30}} source={require('../assets/share-icon.png')}></Image>
            </View>
            <View >
              <Text style={styles.menuText}>Share</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.menuItem }} >
            <View style={styles.imageContainer}>
              <Image style={{ height: 30, width: 30 }} source={require('../assets/edit-icon.png')}></Image>
            </View>
            <View >
              <Text style={styles.menuText}>Edit </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.menuItem }}>
            <View style={styles.imageContainer}>
              <Image style={{ height: 30, width: 30 }} source={require('../assets/rate-icon.png')}></Image>
            </View>
            <View >
              <Text style={styles.menuText}>Rate</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )}

  </View>

}

const screen = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper:{
    height: screen.height
  },
  menuItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    width: '50%',
    backgroundColor: '#fc5d5d',
    padding: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,

  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  container: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'space-between',
  },
  container2: {
    marginVertical: 10,
    marginHorizontal: 5,
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
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    height: screen.height/3,
    width: screen.width,
    padding: 5,
  },
  text: {
    marginVertical: 5,
  }
});
