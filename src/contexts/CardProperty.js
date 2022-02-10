import { createContext, useEffect, useState } from 'react'

// import { getProperty } from '../api/properties'

const CardPropertyContext = createContext({ })


const CardPropertyProvider = ({ children }) => {
    const [cardProperty , setCardProperty] = useState(null)

    console.log("context",cardProperty)

    const value = {
        cardProperty,
        setCardProperty,
    }

    return (
        <CardPropertyContext.Provider value={value}>
            {children}
        </CardPropertyContext.Provider>
    )
}

export {
    CardPropertyContext,
    CardPropertyProvider
}