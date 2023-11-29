import { Button } from 'react-native';
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


export default function DetailScreen({navigation}){
    return (
      <SafeAreaView style={styles.container}>
       <Image style={styles.image} source='https://picsum.photos/200/200'/>
       <View  style={styles.container2}>
            <Text  style={styles.text} >Name</Text>
            <Text  style={styles.text}> Adress</Text>
            <Text  style={styles.text}> Phone Number</Text>
            <Text  style={styles.text}> Resturant Tags</Text>
       </View>
       <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <TouchableOpacity style={styles.button}  onClick={() => navigation.navigate("Direction")}>
               <Text style={styles.buttonText}>Direction</Text>
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
    marginVertical : 10,
    marginHorizontal: 5,

  },
    button: {
    marginBottom: 60,
    width : imageWidth -10,
    backgroundColor: '#FF5757',
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 25, 
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',

  },
    color: 'white',
    fontSize: 18,
   
  },
  image:{
    height: imageHeight,
    width: imageWidth,
    padding: 5
  },
  text: {
    marginVertical: 5
  }
});