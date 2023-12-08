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
import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react'
import SplashScreen from './components/SplashScreen'
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';
import DetailScreen from './components/DetailScreen';
import EditScreen from './components/EditScreen';
import RateScreen from './components/RateScreen';
import ShareScreen from './components/ShareScreen';
import UserContext, { UserProvider } from './components/context/UserContext'
import RestaurantContext, { RestaurantProvider } from './components/context/RestaurantContext';
import { initializeDatabase } from './components/Model'
const navStack = createStackNavigator();

export default function App() {
  useEffect(() => {
    initializeDatabase()
  }, [])
  return (
    <UserProvider>
      <RestaurantProvider>
        <SafeAreaView style={styles.container}>
          <Layout></Layout>
        </SafeAreaView>
      </RestaurantProvider>
    </UserProvider>
  );
}

export const Layout = () => {
  const { signedState } = useContext(UserContext)
  const [signedIn, setSignedIn] = signedState
  return (
    <NavigationContainer>
      <navStack.Navigator>
        {signedIn ? (
          <>
            {/* <navStack.Screen
              name="Splash"
              component={SplashScreen}
              options={{
                backBehavior: 'none',
                headerLeft: null,
                headerShown: false,
                gestureEnabled: false
              }}
            /> */}
            <navStack.Screen name="Home" component={HomeScreen} />
            <navStack.Screen name="Detail" component={DetailScreen} />
            <navStack.Screen name="Edit" component={EditScreen} />
            <navStack.Screen name="Rate" component={RateScreen} />
            <navStack.Screen name="Share" component={ShareScreen} />
          </>
        ) : (
          <>
            <navStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false, gestureEnabled: false }}
            />
            <navStack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </navStack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <NavigationContainer>
  //     <navStack.Navigator>
  //       {signedIn ? (
  //         <>
  //           <navStack.Screen
  //             name="Splash"
  //             component={SplashScreen}
  //             options={{
  //               backBehavior: 'none',
  //               headerLeft: null,
  //               headerShown: false,
  //               gestureEnabled: false,
  //             }}
  //           />
  //           <navStack.Screen name="Home" component={HomeScreen} />
  //           <navStack.Screen name="Detail" component={DetailScreen} />
  //           <navStack.Screen name="Edit" component={EditScreen} />
  //           <navStack.Screen name="Rate" component={RateScreen} />
  //           <navStack.Screen name="Share" component={ShareScreen} />
  //         </>
  //       ) : (
  // <>
  //   <navStack.Screen
  //     name="Login"component={LoginScreen} options={{ headerShown: false, gestureEnabled: false }}
  //   />
  //   <navStack.Screen name="Registration" component={RegistrationScreen}
  //   />
  // </>
  //       )}
  //     </navStack.Navigator>
  //   </NavigationContainer>
  // );
}



const screen = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    height: screen.height,
    width: screen.width

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

