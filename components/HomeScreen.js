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
            <Text style={styles.backText}>{'<'}</Text>
          </View>

        </TouchableOpacity>
      },
      headerRight: () => {
        return <TouchableOpacity style={{ marginLeft: 0 }} onPress={() => setMenuVisible(!menuVisible)}>
          {
            !menuVisible ?
              <View style={{ ...styles.backButton, marginRight: 3 }} >
                <Text style={styles.backText}>{'='}</Text>
              </View> : <View></View>

        }


        </TouchableOpacity>
      },
      headerStyle: {
        backgroundColor: '#ff5757',
        borderRadius: 20,
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
  return <View>


    <Text>hello world</Text>
    <Button style={styles.button} text="Take me to Detailssss...." onPress={handleDetailPress}></Button>
  </View>
}

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
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
  searchContainer: {
    display: 'flex',
    alignItems: 'baseline',
    width: screen.width / 1.6,
  },
  searchInput: {
    width: screen.width / 1.6,
    backgroundColor: 'white',
    borderWidth: 1,
    height: 40,
    borderRadius: 20,
    padding: 15
  },
  backButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    marginLeft: 3,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backText: {

    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})