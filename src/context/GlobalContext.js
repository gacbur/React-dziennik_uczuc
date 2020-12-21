import React from 'react'
import { createContext, useReducer, useState, useEffect } from 'react'

import uuid from 'react-uuid'
import moment from 'moment'

import { AppReducer } from '../reducer/AppReducer'

const initialState = {
    records: localStorage.getItem('records') ? JSON.parse(localStorage.getItem('records')) : [],
    recordValues: {
        situationValue: '',
        thoughtsValue: '',
        feelingsValue: '',
        reactionsValue: '',
        fearValue: false,
        shameValue: false,
        happinessValue: false,
        angerValue: false,
        sadnessValue: false,
        neutralValue: false,
        unconcernValue: false,
    }
}

export const GlobalContext = createContext()

export const GlobalContextProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem('records', JSON.stringify(state.records))
    }, [state.records])

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
                    date: moment().format('YYYY-MM-DD'),
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

    const handleDeleteRecord = (id) => {

        const recordsArr = [...state.records]
        const tempRecords = recordsArr.filter(item => item.id !== id)

        dispatch({ type: 'deleteRecord', payload: tempRecords })
    }



    return (
        <GlobalContext.Provider value={{
            records: state.records,
            recordValues: state.recordValues,
            AddRecordMessage: AddRecordMessage,
            handleChangeRecordValues,
            handleAddNewRecord,
            handleDeleteRecord
        }} >
            {props.children}
        </GlobalContext.Provider>
    )
}