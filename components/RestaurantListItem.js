import { TouchableOpacity,StyleSheet,Dimensions,Text,View,Image } from 'react-native'
export default function RestaurantListItem({navigation,item}){
    console.log("this is the list view " + item.image_data)
    const handleNavigation = () => {
        navigation.navigate('Detail', {item})
    }
    return <View>

    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
    <View style={{margin: 12}}>
        <Text style={styles.text}>{item.name.toUpperCase()}</Text>
        <Text style={styles.text}>{item.description.toUpperCase()}</Text>
        <Text style={styles.text}>{item.address.toUpperCase()}</Text>
    </View>
    <View >
        <Image source={{uri: item.image_data}} style={styles.image}/>
    </View>
    </TouchableOpacity>
    <View>
        <Text style={{borderBottomWidth: 1, height: 1, opacity: .2}}></Text>
    </View>
    </View> 

}   
const screen = Dimensions.get('window')
const styles = StyleSheet.create({
    image:{
        width: 100,
        height: 100,
        margin: 12,
        borderRadius: 10
    },
    container:{
        display:'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        borderRadius: 10

    },
    text:{
        margin: 5,
        color: '#424141'
    }
})