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
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import Button  from './Button';

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


  const item = route.params.item
  const restaurantAddress = `${item.street_number} ${item.street_name}` 
  const [restaurantLocation, setRestaurantLocation] = useState()
  const [userLocation, setUserLocation] = useState()

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const apiKey = 'AIzaSyB--tGBHF3mALJrDPOWChwEG4_OQl2dexo'
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(restaurantAddress)}&key=${apiKey}`
        );
        const data = await response.json()
        console.log(data)

        if ( data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location
          setRestaurantLocation({ latitude: lat, longitude: lng })
          console.log("restaurant location is: " + restaurantLocation)
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error)
      }
    }

    fetchCoordinates();    
  }, [])

  
   const handleDirection = () => {
    const address = `${item.street_number} ${item.street_name}` 

    const mapsURL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  
    Linking.openURL(mapsURL)
      .catch(err => console.error('An error occurred', err));
  };
  

      return (
    <View style={styles.container}>
      {restaurantLocation && (
        <MapView style={styles.map} 
        initialRegion={{
          latitude: restaurantLocation.latitude,
          longitude: restaurantLocation.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        >
          <Marker coordinate={restaurantLocation} title={item.name} />
        </MapView>

      )}
      <Button style={{ ...styles.button, marginBottom: 20 }} text="Direction" onPress={handleDirection}></Button>

    </View>
  )
}
const screen = Dimensions.get("window");
const imageWidth = screen.width ;
const imageHeight = screen.height / 2 ;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width:imageWidth,
      height: imageHeight
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
  });