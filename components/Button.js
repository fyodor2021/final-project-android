import {
    Text,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';


export default function Button({style, text, onPress}){
    return <TouchableOpacity style={style} onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
}
const styles = StyleSheet.create({
    text:{
        fontSize:15,
        fontWeight: 'bold',
        color:'white'
    },

})