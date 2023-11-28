import { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from 'react-native';


export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setInterval(() => {
      navigation.navigate('Login')
    }, 3000)
  })

    
    return <SafeAreaView>
    {/* <Image source={require("../images/ourLogo.png")} /> */}
    {/* <Image source={require("../images/pexels-pixabay-262978.jpg")} style={styles.dishImage}/> */}
    <ImageBackground source={require('../images/pexels-pixabay-262978.jpg')} style={styles.dishImage} blurRadius={8}>
      <View style={styles.container}>
        <View>
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

    </ImageBackground>
  </SafeAreaView>

  // return <TouchableOpacity  onPress={() => navigation.navigate("Detail")}>

  // <Text>
  //     Details
  // </Text>
  // </TouchableOpacity>
}
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  
  container:{
    display:'flex',
    flexDirection: 'row'
  },
  textContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
  },
  text:{
    color:'white',
    fontSize: 50,
    marginLeft: 0,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 4, height: 7 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  dishImage: {
    height: screen.height,
    width: screen.width,
    
  },
  logoImage: {
    width: screen.width / 1.6,
    height: screen.height / 1.2,
    marginLeft: 20,
    resizeMode: 'contain',

  }
})
