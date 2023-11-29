import {
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    View,
    Dimensions
  } from 'react-native';


export default function ShareScreen({navigation}){
    return (
      <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../images/fries.png')}/>
      <View style={styles.container2} >
           <TouchableOpacity style={[styles.button, { backgroundColor: '#3b5998' }]}  onClick={() => navigation.navigate("")}>
              <Image source={require('../images/facebook.png')} style={styles.icon} />
           </TouchableOpacity>
           <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]}   onClick={() => navigation.navigate("")}>
              <Image source={require('../images/twitter.png')} style={styles.icon} />
           </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'white' }]}  onClick={() => navigation.navigate("")}>
              <Image source={require('../images/google.png')} style={styles.icon} />
           </TouchableOpacity>
     </View>
   
  
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
  padding: 8,
  justifyContent: 'space-between'
},  
container2:{
  marginVertical : 50,
  marginHorizontal: 5,


},
  button: {
  marginTop: 10,
  width : imageWidth -10,
  paddingHorizontal: 24,
  borderRadius: 25, 
  borderWidth: 1,
  borderColor: 'black',
  alignItems: 'center',

},
icon :{
  width: 50,
  height: 50
},
image:{
  height: imageHeight,
  width: imageWidth,
  padding: 5
}
});
