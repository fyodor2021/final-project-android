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
import { useEffect } from 'react';

export default function HomeScreen({navigation}){
    useEffect(() => {
      console.log('home screen mounted')
    })
    return <Text>hello world</Text>
}