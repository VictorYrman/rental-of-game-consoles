import React, {createContext, useState} from 'react'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    return(
        <GlobalState.Provider value={"Value in GlobalState"}>
            {children}
        </GlobalState.Provider>
    )
}