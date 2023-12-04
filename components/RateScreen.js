import Button from './Button'
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
    TextInput
  } from 'react-native';
import {useEffect, useState} from 'react';
import { KeyboardAvoidingView , Keyboard, TouchableWithoutFeedback} from 'react-native';
import Model, { addReview, getAllReviews } from './Model';


export default function RateScreen({navigation}){
const handlePressOutside = () => {
    Keyboard.dismiss();
};


const [defaultRating, setDefaultRating] = useState(2)
const [maxRating, setMaxRating] = useState([1,2,3,4,5])
const [review, setReview] = useState({
  user_id: '',
  restaurant_id: '',
  review_body: '',
  star_rate: 2
})
const [review_body,setReviewBody] = useState('')

const Rate = () => {
  return (
      <View style={styles.starRow}>
      {
        maxRating.map( (item,key) => {
          return (
            <TouchableOpacity activeOpacity={0.2} key={key} onPress = { () => setDefaultRating(item)}> 
              <Image style={styles.star} 
              source={
              item <= defaultRating
                ? require('../images/fullStar.png') 
                : require('../images/emptyStar.png') }
              />
            </TouchableOpacity>
          )
        })
      }
     </View>
  )}
  useEffect(() => {
    setReview({
      user_id: 5,
      restaurant_id: 5,
      review_body: review_body,
      star_rate: defaultRating
    })
  }, [review_body, defaultRating]);
  
  const handleOnSubmit = () => {  
    addReview(review)
  }



  return (
    <TouchableWithoutFeedback  onPress={handlePressOutside}>
    <KeyboardAvoidingView behavior='height' style={styles.container}>
    <SafeAreaView style={styles.container}>
     <Image style={styles.image} source={require('../images/fries.png')}/>
    

     <View  style={styles.container2}>
          <Text  style={styles.text} >Tell us how we did?</Text>
          <TextInput multiline={true}  style={styles.textInput} onChangeText={(review_body)=> setReviewBody(review_body)}/>
     </View>
     <View  style={styles.container2}>
          <Text  style={styles.text} >Rating:</Text>
          <Rate setDefaultRating={setDefaultRating}/>
          
     </View>
     <View >
          <Button title='submit' onPress={handleOnSubmit} style={styles.button}  text="Rate" />
    </View>
  
    </SafeAreaView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    )}
    

const screen = Dimensions.get("window");
const imageWidth = screen.width ;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'centre'
  },  
  container2:{
    marginVertical : 5,
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
  textInput: {
   backgroundColor: 'white',
    height: 100,
    borderRadius: 15,
    borderWidth: 1,
    textAlignVertical: 'top',
    paddingLeft: 15,

  },
  starRow: {
    flexDirection: 'row',
    marginTop: 5
  },
  star :{
    width: 30,
    height: 30
  },
image:{
  height: '55%',
  width: imageWidth,
  padding: 5
},
  icon :{
  width: 50,
  height: 50
}
});
