import { createContext, useState } from "react"
import { deleteRestaurant as deleteRestaurantModel, getAllRestaurants, searchRestaurant} from '../Model'
import { useEffect } from "react"
const RestaurantContext = createContext(undefined)

function RestaurantProvider({children}) {
    const [restaurants, setRestaurants] = useState({})
    const [deleteConfirmation, setDeleteConfirmation] = useState(false)
    const [deleteConfirmed, setDeleteConfirmed] = useState(false)
    const [restaurantId, setRestaurantId] = useState()
    const fetchRestaurants = () => {
        const results = getAllRestaurants().then((result) => {
            setRestaurants(result)}).catch((error) => console.error(error))
    }
    const findRestaurantBySearch = (term) => {
        const results = searchRestaurant(term).then(result => setRestaurants(result)).catch(error => console.log(error))
    }


    const restaurantValues = {
        restaurants,
        fetchRestaurants,
        setDeleteConfirmation,
        deleteConfirmation,
        setDeleteConfirmed,
        deleteConfirmed,
        setRestaurantId,
        restaurantId,
        findRestaurantBySearch,
    }
    return <RestaurantContext.Provider value={restaurantValues}>
        {children}
    </RestaurantContext.Provider>
}
export default RestaurantContext
export {RestaurantProvider}

