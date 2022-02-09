import { createContext, useEffect, useState } from 'react'

import { getMe } from '../api/auth'

const UserContext = createContext({ })

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userPositon, setUserPosition] = useState([2.38244550268222, 48.8949061258374])

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const fetchedUser = await getMe()

        if (!fetchedUser.error) {
            setUser(fetchedUser)
        }
    }

    const value = {
        user,
        setUser,
        getUser,
        userPositon,
        setUserPosition
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserProvider
}