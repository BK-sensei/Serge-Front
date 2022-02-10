import { createContext, useEffect, useState } from 'react'

// import { getProperty } from '../api/properties'

const DiceContext = createContext({ })


const DiceProvider = ({ children }) => {
    const [dice , setDice] = useState(null)

    console.log("context",dice)

    const value = {
        dice,
        setDice,
    }

    return (
        <DiceContext.Provider value={value}>
            {children}
        </DiceContext.Provider>
    )
}

export {
    DiceContext,
    DiceProvider
}