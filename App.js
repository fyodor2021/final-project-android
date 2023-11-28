import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
export default function App() {
  const navStack = createStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <navStack.Navigator>
          <navStack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
          <navStack.Screen name="Login" component={LoginScreen}/>
          <navStack.Screen name="Registration" component={RegistrationScreen}/>
          <navStack.Screen name="HomeScreen" component={HomeScreen}/>
          <navStack.Screen name="DetailScreen" component={DetailScreen}/>
          <navStack.Screen name="EditScreen" component={EditScreen}/>
          <navStack.Screen name="RateScreen" component={RateScreen}/>
          <navStack.Screen name="ShareScreen" component={ShareScreen}/>
        </navStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});