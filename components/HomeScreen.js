import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import { useState, useLayoutEffect, useContext, useEffect } from 'react';
import Button from './Button'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-auth';
import UserContext from './context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllRestaurants, deleteRestaurant } from './Model'
import RestaurantListItem from './RestaurantListItem';
import { useIsFocused } from '@react-navigation/native';
import RestaurantContext from './context/RestaurantContext';


function HomeScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false)
  const { signedState } = useContext(UserContext)

  const [signedIn, setSignedIn] = signedState
  const [search, setSearch] = useState()
  const [user, setUser] = useState()
  const { deleteConfirmation,
    restaurants,
    fetchRestaurants,
    setDeleteConfirmation,
    setDeleteConfirmed,
    deleteConfirmed,
    findRestaurantBySearch,
    restaurantId } = useContext(RestaurantContext)
  const isFocused = useIsFocused();

  const handleLogoutPress = async () => {
    signOut(auth).catch(error => console.log(error))
    AsyncStorage.setItem('loggedInUser', '').catch(error => console.log(error))
    setSignedIn(false)
  }

  const handleSeachSubmit = () => {
    findRestaurantBySearch(search)
  } 

  const handleDetailPress = () => {
    navigation.navigate('Detail')
  }
  useEffect(() => {
    setMenuVisible(false)
    fetchRestaurants();
  }, [isFocused, deleteConfirmed])


  const handleSearchChange = (event) => {
    setSearch(event.nativeEvent.text)
  }

  navigation.setOptions({
    headerTitle: () => {
       return <TextInput 
       value={search} 
       style={styles.searchInput} 
       placeholder='Search' 
       onChange={handleSearchChange} 
       onSubmitEditing={handleSeachSubmit} />
    },
    headerTitleContainerStyle: {
      marginLeft: 0
    },
    headerLeft: null
    ,
    headerRight: () => {
      return <TouchableOpacity style={{ marginLeft: 0 }} onPress={handleMenuToggle} >
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
  const handleAddRestaurantPress = () => {
    navigation.navigate("Edit", { item: null })
  }


  const handleMenuToggle = async () => {
    const loggedInUser = await AsyncStorage.getItem('loggedInUser')
    const user = JSON.parse(loggedInUser)
    setUser(user)
    setMenuVisible(!menuVisible)
  }
  const handleDeletePress = () => {
    deleteRestaurant(restaurantId)
    setDeleteConfirmation(false)
    setDeleteConfirmed(true)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <FlatList data={restaurants} renderItem={({ item }) => {
          return <RestaurantListItem navigation={navigation} item={item} />
        }} keyExtractor={(item) => item.id} />
      </View>
      {menuVisible && (
        <View style={styles.menuWrapper}>
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItemHeader}>
              <View style={styles.imageContainer}>
                <Image style={{ height: 30, width: 40 }} source={require('../assets/user.png')} />
              </View>
              <View style={styles.menuTextHeaderContainer}>
                {/* <Text style={styles.menuTextHeader}>{user.email}</Text> */}
                <Text style={styles.menuTextHeader}>vedoorbbs@gmail.com</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.menuItem }} onPress={handleAddRestaurantPress}>
              <View style={styles.imageContainer}>
                <Image style={{ height: 40, width: 30 }} source={require('../assets/restaurant-icon.png')}></Image>
              </View>
              <View >
                <Text style={styles.menuText}>Add a Restaurant</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.menuItem }}>
              <View style={styles.imageContainer}>
                <Image style={{ height: 25, width: 30 }} source={require('../assets/calling.png')}></Image>
              </View>
              <View >
                <Text style={styles.menuText}>Contact Support</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.menuItem }}>
              <View style={styles.imageContainer}>
                <Image style={{ height: 30, width: 30 }} source={require('../assets/about-icon.png')}></Image>
              </View>
              <View >
                <Text style={styles.menuText}>About</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.menuItem }} onPress={handleLogoutPress}>
              <View style={styles.imageContainer}>
                <Image style={{ height: 30, width: 30 }} source={require('../assets/sign-out.png')}></Image>
              </View>
              <View >
                <Text style={styles.menuText}>Sign out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {deleteConfirmation && (

            <View style={styles.confirmationWrapper}>
              <View style={styles.confirmationContainer}>
                <View>
                  <View>
                    <Text style={{color: 'white'}}>Are you sure you want to delete this item?</Text>
                  </View>
                  <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', margin: 20,}}>
                    <Button text='Yes' style={{...styles.button, backgroundColor: 'red'}} onPress={handleDeletePress}></Button>
                    <Button text='No' style={{...styles.button, backgroundColor: 'green'}} onPress={() => setDeleteConfirmation(false)}>No</Button>
                  </View>
                </View>
              </View>
            </View>
      )}
    </SafeAreaView>
  );
};
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  confirmationWrapper:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  confirmationContainer:{

    width: '50%',
    height: '15%',
    backgroundColor: '#fc5d5d',
    padding: 10,
    position: 'absolute',
    left: 100,
    top: 200,
    right: 0,
    bottom: 0,
    borderRadius: 10,
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

  imageContainer: {
    marginRight: 10,
  },
  menuTextHeaderContainer: {
    flex: 1,
  },
  menuTextHeader: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
  },
  menuToggleButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'lightblue',
    padding: 10,
  },
  detailsButton: {
    width: screen.width,
    height: 50,
    backgroundColor: '#ff5757',
  },
  button: {
    justifyContent: 'center',
    width: 70,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    height: 30,
    borderRadius: 20,
    padding: 1,
    display: 'flex',
    alignItems: 'center',
  },
});

//   return <SafeAreaView style={{ width: '14444' }}><TouchableWithoutFeedback>{!menuVisible ?

//     <View style={styles.menuWrapper}>
//       <View style={styles.menuContainer}>
//         <TouchableOpacity style={{ ...styles.menuItem, ...styles.menuHeader }}>
//           <View style={styles.imageContainer}>
//             <Image  style={{height: 30, width: 40}} source={require('../assets/user.png')}></Image>
//           </View>
//           <View style={styles.menuTextHeaderContainer}>
//             <Text style={styles.menuTextHeader}>{user.email}</Text>
//           </View>
//         </TouchableOpacity>

//       </View>
//     </View>






//   }</TouchableWithoutFeedback></SafeAreaView>
// }




// const styles = StyleSheet.create({
//   menuText:{
//     color: 'white'
//   },
//   menuTextHeader:{
//     color: 'white',
//     fontSize: 15
//   },
//   menuTextHeaderContainer:{
//     width: '80%',
//     borderRadius: 20
//   },
//   imageContainer:{
//     width: '20%'
//   },
//   menuWrapper: {
//     display: 'flex',
//     height: screen.height,
//     width: screen.width,
//     backgroundColor: 'blue',
//     flexDirection: 'row',
//     justifyContent: 'flex-end'
//   },
//   menuContainer: {
//     height: screen.height/2,
//     backgroundColor: '#ff5757',
//     width: screen.width / 2,
//     borderRadius: 20
//   },

//   menuHeader: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 50,
//     borderWidth: 1,
//     borderColor: 'white',
//     borderRadius: 20

//   },


//   menuItem: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 60,
//     borderBottomColor: 'white',
//     borderBottomWidth: 1
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#ff5757',
//     marginLeft: 1,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   backImage: {
//     marginRight: 5
//   }
// })

export default HomeScreen;