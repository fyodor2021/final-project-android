import { TouchableOpacity, StyleSheet, Dimensions, Text, View, Image } from 'react-native'
import deleteIcon from '../images/delete-restaurant-icon.png'
import editIcon from '../images/edit-restaurant-icon.png'

import { useContext } from 'react';
import RestaurantContext from './context/RestaurantContext';
export default function RestaurantListItem({ navigation, item }) {
    const { deleteRestaurant, deleteConfirmed, setDeleteConfirmation, setRestaurantId } = useContext(RestaurantContext)
    const handleNavigation = () => {
        navigation.navigate('Detail', { item })
    }
    const handleDeletePress = () => {
        setRestaurantId(item.id)
        setDeleteConfirmation(true)
    }
    const handleEditPress = () => {
        navigation.navigate('Edit', {item})
    }
    return <View>


        <TouchableOpacity style={styles.container} onPress={handleNavigation}>
            <View style={styles.textContainer}>
                <Text style={{...styles.text, fontSize:30,fontWeight: 'bold'}}>{item.name.toUpperCase()}</Text>
                <View style={styles.descContainer}>
                    <Text style={{ ...styles.text}}>{item.description.toUpperCase()}</Text>
                </View>
                <Text style={styles.text}>{item.street_number + " " + item.street_name}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <View >
                    <View  style={{ display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={handleEditPress}>
                            <Image source={editIcon} style={{ width: 20, height: 20, margin: 10, marginBottom: 0 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleDeletePress}>
                            <Image source={deleteIcon} style={{ width: 20, height: 20, margin: 10, marginLeft: 0, marginBottom: 0 }} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View >
                    <Image source={{ uri: item.image_data }} style={styles.image} />
                </View>

            </View>

        </TouchableOpacity>
        <View>
            <Text style={{ borderBottomWidth: 1, height: 1, opacity: .2 }}></Text>
        </View>

    </View>

}
const screen = Dimensions.get('window')
const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 12,
        borderRadius: 10
    },
    descContainer:{
        flexWrap: 'wrap',
        width: screen.width/1.5,
        flexDirection: 'row'
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        margin: 5,
        color: '#424141',
    },
    textContainer:{
        marginLeft: 12,
        marginTop: 15,
        width: screen.width/3,
        flexWrap:'wrap'
    }
})