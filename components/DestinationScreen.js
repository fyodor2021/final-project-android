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
    Linking
  } from 'react-native';
import email from 'react-native-email';

export default function DestinationScreen({navigation, route}){
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
  
   

    



    return (
      <SafeAreaView style={styles.container}>
      
   
  
     </SafeAreaView>
      
      
      )
}
const screen = Dimensions.get("window");
const imageWidth = screen.width ;
const imageHeight = screen.height / 2 ;

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#ecf0f1',
  justifyContent: 'space-between'
}
});
