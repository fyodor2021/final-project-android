import { useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    View,
    Dimensions,
  } from 'react-native';


export default function SplashScreen({navigation}){

  useEffect(() => {
    setInterval(() => {
      navigation.navigate("Login")
    }, 3000)
  })

  return <Image source={require("../images/pexels-pixabay-262978.jpg")} style={styles.image}>

  </Image>
  // return <TouchableOpacity  onPress={() => navigation.navigate("Detail")}>

  // <Text>
  //     Details
  // </Text>
  // </TouchableOpacity>
}
const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  image:{
    height: screen.height,
    width: screen.width

  }
})
