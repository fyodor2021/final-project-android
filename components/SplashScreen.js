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
  } from 'react-native';


export default function SplashScreen({navigation}){

  useEffect(() => {
    setInterval(() => {
      navigation.navigate("Login")
    }, 3000)
  })


  // return <TouchableOpacity  onPress={() => navigation.navigate("Detail")}>

  // <Text>
  //     Details
  // </Text>


  // </TouchableOpacity>
    
    


}