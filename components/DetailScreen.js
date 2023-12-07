import Button from './Button';
import Model, { deleteReview, getAllReviews } from './Model'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View, Dimensions,
  ScrollView, Linking
} from 'react-native';
import React,{ useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native';
import { useState } from 'react'


export default function DetailScreen({ navigation, route}) {
  const [menuVisible, setMenuVisible] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])
  const [reviews, setReviews] = useState([])
  const isFocused = useIsFocused();
  navigation.setOptions({
    title: '',
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
    },
    headerRight: () => {
      return <TouchableOpacity style={{ marginLeft: 0 }} onPress={() => setMenuVisible(!menuVisible)}>
        <View style={{ ...styles.backButton, marginRight: 3 }} >
          <Image source={require('../images/hamburgerMenu.png')} style={{ ...styles.backImage, width: 20, height: 20, marginRight: 0 }} />
        </View>
      </TouchableOpacity>
    }
  })

  const Share = () => {
    navigation.navigate('Share')
  }
  const Rate = () => {
    navigation.navigate('Rate')
  }
  const fetchReviews = () => {
    getAllReviews().then((reviews) => setReviews(reviews))
                    .catch((error) => console.error(error))

  }

  
  useEffect(() => {
    if (isFocused){
      fetchReviews()
    }
  }, [isFocused]);

  const handleDelete = (id) => {
    deleteReview(id)
    fetchReviews()
  }
  const handleEdit = (review)=>{
    navigation.navigate('Rate', {mode:'update', review:review})

  }



  const handleDirection = () => {
    const label= '1909 lawernce ave e';
    const mapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(label)}`;

      Linking.openURL(mapsURL).catch(err => console.error('An error occurred', err));
       
  }

  
return <View style={styles.wrapper}>
    <View>
      <View style={styles.container}>
      <View style={{marginRight:4}}>
        <Image style={styles.image} source={{uri: route.params.item.image_data}} />
      </View>
        <View style={styles.container2}>
          <Text style={styles.text}>Name: {route.params.item.name}</Text>
          <Text style={styles.text}>Address: {route.params.item.address}</Text>
          <Text style={styles.text}>Phone Number: {route.params.item.phone_number}</Text>
          <Text style={styles.text}>Restaurant Tags: {route.params.item.tags}</Text>
        </View>
      </View>
    </View>
    {menuVisible && (
      <View style={styles.menuWrapper}>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={{ ...styles.menuItem }}>
            <View style={styles.imageContainer}>
              <Image style={{ height: 30, width: 30}} source={require('../assets/share-icon.png')}></Image>
            </View>
            <View >
              <Text style={styles.menuText}>Share</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.menuItem }} >
            <View style={styles.imageContainer}>
              <Image style={{ height: 30, width: 30 }} source={require('../assets/edit-icon.png')}></Image>
            </View>
            <View >
              <Text style={styles.menuText}>Edit </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.menuItem }}>
            <View style={styles.imageContainer}>
              <Image style={{ height: 30, width: 30 }} source={require('../assets/rate-icon.png')}></Image>
            </View>
            <View >
              <Text style={styles.menuText}>Rate</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )}

  </View>

}
        {reviews.map((item, key) => {
            return (
                <View  key={key}>
                  <View style={styles.containerRow}>
                    <View style={styles.textContainer}>
                         <Text style={{marginRight: 5}}>  {item.review_body}</Text>
                    </View>
                  
                    <View style={styles.iconsContainer}>
                      {maxRating.map((star, key) => {
                      return (
                        <View style={styles.starBar} key={key} >
                        <View >
                          <Image style={styles.star}
                            source={
                              star <= item.star_rate
                                ? require('../images/fullStar.png')
                                : require('../images/emptyStar.png')}
                          />
                          </View>
                        </View>
                      )})}
                      <View style={styles.iconBar}>
                            <TouchableOpacity onPress={()=> {handleEdit(item)}} >
                            <Image style={styles.icon} source={ require('../images/edit.png')}/>
                            </TouchableOpacity>
                           <TouchableOpacity onPress={()=> {handleDelete(item.id)}}  >
                              <Image style={styles.icon}  source={ require('../images/delete.png')}/>
                            </TouchableOpacity>
                      </View>
                    </View>

                    </View>
                  
                </View>
            )})}
    
      </View>
      <Button style={{ ...styles.button, marginBottom: 20 }} text="Direction" onPress={handleDirection}></Button>

    </View>
    </View>
  </ScrollView>


}

const screen = Dimensions.get("window");
const imageWidth = screen.width;
const imageHeight = screen.height / 2;
const styles = StyleSheet.create({
  wrapper:{
    height: screen.height
  },
  menuItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    width: '50%',
    backgroundColor: '#fc5d5d',
    padding: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,

  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  container: {
    backgroundColor: '#ecf0f1'
  },
  containerRow:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'right',
    borderWidth: 1,
    width: screen.width,
    height: 100,
    justifyContent : 'space-between' ,
    borderRadius: 15,
    marginTop: 15,
    backgroundColor: 'white'
    backgroundColor: '#ecf0f1',
    justifyContent: 'space-between',
  },
  container2: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  button: {
    width: screen.width / 1.3,
    backgroundColor: '#ff5757',
    borderWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    height: 50,
    borderRadius: 20,
    padding: 15,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    height: imageHeight, 
    width: imageWidth, 

    padding: 5,
  },
  text: {
    marginVertical: 5,
  },

  icon: {
    width: 25,
    height: 25,
  },
  star: {
    width: 20,
    height: 20
  },
  starBar:{
  },
  iconBar:{
    flexDirection: 'row',
    marginLeft: 4
  },
  iconsContainer: {
    width: 500,
    flexDirection: 'row',
  },
  textContainer: {
    width: 247,
    paddingLeft: 3,
  }

});
