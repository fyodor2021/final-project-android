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

export default function ShareScreen({navigation, route}){
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
  const item = route.params.item
  const shareViaEmail = () => {
    const to = [''];
    email(to, {
      subject: 'Check Out This Resturant!',
      body: `Hello there,
      I visited ${item.name} today and it was an amazing experince
      Check it out if you are intersted !
      Name: ${item.name}
      Address: ${item.address} 
      https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`,
    }).catch(console.error);
    };

    const shareViaTwitter = () => {
    const restaurantUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`;

    const tweetBody = `Hello there,
    I visited ${item.name} today and it was an amazing experince
    Check it out if you are intersted !
    Name: ${item.name}
    Address: {resturant address}`
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(restaurantUrl)}&text=${encodeURIComponent(tweetBody)}`;
    Linking.openURL(url)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
   

    const shareViaFacebook = () => {
      const restaurantUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`;
      const postBody = `Hello there,
      I visited this {resturant name} today and it was an amazing experince
      Check it out if you are intersted !
      Name: ${item.name}
      Address: ${item.address}`
      let para = [];
      para.push('u=' + encodeURI(restaurantUrl));
      para.push('post=' + encodeURI(postBody));
      const url = 'https://www.facebook.com/sharer/sharer.php?' + para.join('&');
      Linking.openURL(url)
          .then((data) => {
            console.log(data.results);
          })
          .catch((e) => {
            console.log(e);
          });
      };



    return (
      <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: route.params.item.image_data}} />
      <View style={styles.container2} >
           <TouchableOpacity style={[styles.button, { backgroundColor: '#3b5998' }]}  onPress={shareViaFacebook}>
              <Image source={require('../images/facebook.png')} style={styles.icon} />
           </TouchableOpacity>
           <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]}   onPress={shareViaTwitter}>
              <Image source={require('../images/twitter.png')} style={styles.icon} />
           </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'white' }]}  onPress={shareViaEmail}>
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
