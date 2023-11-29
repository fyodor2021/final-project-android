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


export default function LoginScreen({navigation}){
    return <TouchableOpacity  onPress={() => navigation.navigate("Detail")}>

    <Text>
        Details
    </Text>
    </TouchableOpacity>
}