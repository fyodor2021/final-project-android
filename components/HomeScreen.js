import {
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Image,
    Dimensions,
    TouchableOpacity,
    View,
  } from 'react-native';
import { useEffect } from 'react';
import Button from './Button'
export default function HomeScreen({navigation}){
    const handleDetailPress = () => {
      navigation.navigate('Detail')
    }
    return <View>


    <Text>hello world</Text>
    <Button style={styles.button} text="Take me to Detailssss...." onPress={handleDetailPress}></Button>
    </View>
}

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  button: {
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
    marginTop: 25
  }
})