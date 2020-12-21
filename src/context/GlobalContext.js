import React from 'react'
import { createContext, useReducer, useState } from 'react'

import uuid from 'react-uuid'


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

    const {
        situationValue,
        thoughtsValue,
        feelingsValue,
        reactionsValue,
    } = state.recordValues

    const [AddRecordMessage, setAddRecordMessage] = useState('')

    const handleAddNewRecord = () => {

        if (situationValue && thoughtsValue && feelingsValue && reactionsValue !== '') {
            setAddRecordMessage('Wpis został dodany pomyślnie!')
            setTimeout(() => setAddRecordMessage(''), 3000)
            dispatch({
                type: 'addNewRecord', payload: {
                    id: uuid(),
                    ...state.recordValues
                }
            })
            dispatch({ type: 'resetInputvalues' })
        }
        else {
            setAddRecordMessage('Żeby dodać wpis, wszystkie pola tekstowe muszą być wypełnione!')
            setTimeout(() => setAddRecordMessage(''), 3000)
        }
    }

    return (
        <GlobalContext.Provider value={{
            records: state.records,
            recordValues: state.recordValues,
            AddRecordMessage: AddRecordMessage,
            handleChangeRecordValues,
            handleAddNewRecord
        }} >
            {props.children}
        </GlobalContext.Provider>
    )
}