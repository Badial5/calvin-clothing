import React from 'react'
import { useState, createContext, useEffect } from 'react'

//import { onAuthStateChangedListener, } from 'firebase/auth'

import { onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'



//the actual value you want to access

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

//

export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    

    useEffect(() => { 
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                //this means 
                //if user pass in via Google signin then create a documant
                createUserDocumentFromAuth(user)
                
            }
            setCurrentUser(user)
        })
        
        return unsubscribe
    }, [])

    return <UserContext.Provider value={value} >
        {children}
    </UserContext.Provider>
}

<UserProvider>

    <app />
</UserProvider>