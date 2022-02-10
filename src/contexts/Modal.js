import React, { createContext, useState, useEffect } from 'react'


const ModalContext = createContext({ })

const ModalContextProvider = ({ children }) => {
    const [visible, setVisible] = useState(false)
    const [modalType, setModalType] = useState(null)

    useEffect(() => {
        setVisible(false)
        setModalType(null)
    }, [])

    const close = () => {
        setModalType(null)
        setVisible(false)
    }
    
    // const open = () => {
    //     setVisible(true)
    // }

    const handleRankingClick = () => {
        setVisible(true)
        setModalType("ranking")
    }

    const value = {
        visible,
        setVisible,
        modalType,
        setModalType,
        close,
        // open,
        handleRankingClick
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}

export {
    ModalContext,
    ModalContextProvider
}