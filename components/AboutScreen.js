import {Text, View,TouchableOpacity, StyleSheet, Image} from 'react-native'
export default function AboutScreen({navigation}){
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
            <View >
              <Image source={require('../images/goBack.png')} style={{ width: 50, height: 50 }} />
            </View>
          </TouchableOpacity> 
        }
      })
    return <View>
        <View>
            <Text>Josefin Abdulaziz</Text>
            <Text>101390844</Text>
        </View>
        <View>
            <Text>Vedoor Barakat</Text>
            <Text>101388514</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({

}) 