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
            // I only want to create user document only when
            // the user comes true
            if(user) {
                createUserDocumentFromAuth(user)
            }

            //otherwise set the user either null or sign in
            setCurrentUser(user)
        })
        
        return unsubscribe
    }, [])

    return <UserContext.Provider value={value} >
        {children}
    </UserContext.Provider>
}

