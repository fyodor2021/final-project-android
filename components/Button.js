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
    button: {
        width: screen.width / 1.3,
        backgroundColor: 'red',
        borderWidth: 1,
        marginRight: 40,
        marginLeft: 40,
        height: 50,
        borderRadius: 20,
        padding: 15,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center'
      }
})