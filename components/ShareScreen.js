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



export default function ShareScreen({navigation}){
  const shareViaEmail = () => {
    const to = [''];
    email(to, {
      subject: 'Check Out This Resturant!',
      body: `Hello there,
      I visited this {resturant name} today and it was an amazing experince
      Check it out if you are intersted !
      Name: {resturant name}
      Address: {resturant address}`,
    }).catch(console.error);
    };

    const shareViaTwitter = () => {
    const resturantUrl = 'https://aboutreact.com'
    const tweetBody = `Hello there,
    I visited this {resturant name} today and it was an amazing experince
    Check it out if you are intersted !
    Name: {resturant name}
    Address: {resturant address}`
    let para = [];
    para.push('url=' + encodeURI(resturantUrl));
    para.push('text=' + encodeURI(tweetBody));
      const url ='https://twitter.com/intent/tweet?' + para.join('&');
      Linking.openURL(url)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const shareViaFacebook = () => {
      const restaurantUrl = 'https://aboutreact.com'
      const postBody = `Hello there,
      I visited this {resturant name} today and it was an amazing experince
      Check it out if you are intersted !
      Name: {resturant name}
      Address: {resturant address}`
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
      <Image style={styles.image} source={require('../images/fries.png')}/>
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
