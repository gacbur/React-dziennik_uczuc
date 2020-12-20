import React from 'react'
import { createContext, useReducer } from 'react'

import { AppReducer } from '../reducer/AppReducer'

const initialState = {
    records: [],
    recordValues: {
        situationValue: '',
        thoughtsValue: '',
        feelingsValue: '',
        reactionsValue: '',
        fearValue: false,
        shameValue: false,
        happinesValue: false,
        angerValue: false,
        sadnessValue: false,
        neutralValue: false,
        unconcernValue: false,
    }
}

export const GlobalContext = createContext()

export const GlobalContextProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    console.log(state.recordValues.situationValue)

    const handleChangeRecordValues = (e) => {
        const target = e.target
        const name = e.target.name
        const value = target.type === 'checkbox' ?
            target.checked : target.value

        dispatch({
            type: 'changeRecordValues', payload: {
                name,
                value,
            }
        })
    }

    return (
        <GlobalContext.Provider value={{
            recordValues: state.recordValues,
            handleChangeRecordValues
        }} >
            {props.children}
        </GlobalContext.Provider>
    )
}