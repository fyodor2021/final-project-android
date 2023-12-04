// import { Button } from 'react-native';
import Button  from './Button';
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
  const Share = () => {
    navigation.navigate('Share')
  }
  const Rate = () => {
    navigation.navigate('Rate')
  }
    return (
      <SafeAreaView style={styles.container}>
       <Image style={styles.image} source={require('../images/fries.png')}/>
       <View  style={styles.container2}>
            <Text  style={styles.text} >Name</Text>
            <Text  style={styles.text}> Adress</Text>
            <Text  style={styles.text}> Phone Number</Text>
            <Text  style={styles.text}> Resturant Tags</Text>
       </View>
       <View >
            <Button style={styles.button}  text="Direction" onPress={Share}/>
            <Button style={styles.button}  text="Rate" onPress={Rate}/>

            
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
    marginTop: 25,
  },
    buttonText:{
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