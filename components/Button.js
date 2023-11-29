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
  } from 'react-native';


export default function Button({style, text, onPress}){
    return <TouchableOpacity style={style} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
}
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
    text:{
        fontSize:15,
        fontWeight: 'bold',
        color:'white'
    },

})