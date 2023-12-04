import { createContext, useState } from "react"

const UserContext = createContext()

function Provider({children}) {
    const [signedIn, setSignedIn] = useState(false)
    const userValues = {    
        signedState: [signedIn, setSignedIn]
    }
    return <UserContext.Provider value={userValues}>
        {children}
    </UserContext.Provider>
}
export default UserContext
export {Provider}