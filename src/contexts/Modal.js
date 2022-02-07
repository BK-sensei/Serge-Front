import React, { createContext, useState } from 'react'

const ModalContext = createContext({ })

const ModalContextProvider = ({ children }) => {
    const [visible, setVisible] = useState(false)
    const [modalType, setModalTyep] = useState(null)

    const value = {
        visible,
        setVisible,
        modalType,
        setModalTyep
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