import { TouchableOpacity,StyleSheet,Dimensions,Text,View,Image } from 'react-native'
export default function RestaurantListItem({navigation,item}){
    console.log("this is the list view " + item.image_data)

    return <TouchableOpacity style={styles.container}>
    <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.address}</Text>
    </View>
    <View>
        <Image source={{uri: item.image_data}} style={styles.image}/>
    </View>
    </TouchableOpacity>

}   
const screen = Dimensions.get('window')
const styles = StyleSheet.create({
    image:{
        width: 100,
        height: 100,

    },
    container:{
        display:'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    }
})