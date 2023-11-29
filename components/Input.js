import {
    Text,
    TextInput,
    Dimensions,
    View,
    StyleSheet} from 'react-native'
import {useState} from 'react'


export default function Input({label}) {
    const [input, setInput] = useState('');
    const handleChange = (value) => {
        setInput(value)
    }
    return       <View>
    <Text style={styles.labels}>{label}</Text>
    <TextInput value={input} onChange={handleChange} style={styles.input} />
  </View>
}
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
    input: {
        width: screen.width / 1.3,
        backgroundColor: 'white',
        borderWidth: 1,
        marginRight: 40,
        marginLeft: 40,
        height: 45,
        borderRadius: 20,
        padding: 15
      },
      labels: {
        fontSize: 20,
        margin: 50,
        marginBottom: 5,
        marginTop: 5,
        color: 'gray',
        fontSize: 20,
        fontWeight: 'bold',
      },
})