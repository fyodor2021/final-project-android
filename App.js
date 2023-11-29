import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './components/SplashScreen'
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';
import DetailScreen from './components/DetailScreen';
import EditScreen from './components/EditScreen';
import RateScreen from './components/RateScreen';
import ShareScreen from './components/ShareScreen';

export default function App() {
  const navStack = createStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <navStack.Navigator>
        <navStack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
          <navStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
          <navStack.Screen name="Home" component={HomeScreen}/>
          <navStack.Screen name="Registration" component={RegistrationScreen}/>
          <navStack.Screen name="Detail" component={DetailScreen}/>
          <navStack.Screen name="Edit" component={EditScreen}/>
          <navStack.Screen name="Rate" component={RateScreen}/>
          <navStack.Screen name="Share" component={ShareScreen}/>
        </navStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
  }
const screen = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    width: screen.width / 1.3,
    backgroundColor: 'white',
    borderWidth: 1,
    height: 30,
    borderRadius: 20,
    padding: 15
  }
});

