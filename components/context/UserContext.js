import { createContext, useState } from "react"

const UserContext = createContext(undefined)

function UserProvider({children}) {
    const [signedIn, setSignedIn] = useState(false)
    const userValues = {    
        signedState: [signedIn, setSignedIn]
    }
    return <UserContext.Provider value={userValues}>
        {children}
    </UserContext.Provider>
}
export default UserContext
export {UserProvider}
