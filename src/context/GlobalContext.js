import React from 'react'
import { createContext, useReducer, useState, useEffect } from 'react'

import uuid from 'react-uuid'
import moment from 'moment'

import { AppReducer } from '../reducer/AppReducer'

const initialState = {
    records: localStorage.getItem('records') ? JSON.parse(localStorage.getItem('records')) : [],
    sortedRecords: [],
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
    },
    sortingValues: {
        date: 'all'
    },
}

export const GlobalContext = createContext()

export const GlobalContextProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const [sortingHandled, setSortingHandled] = useState(false)

    useEffect(() => {
        localStorage.setItem('records', JSON.stringify(state.records))
        dispatch({ type: 'getSortedRecords', payload: state.records })
    }, [state.records])

    const handleChangeRecordValues = (e) => {
        const target = e.target
        const name = e.target.name
        const value = target.type === 'checkbox' ?
            target.checked : target.value

        dispatch({
            type: 'changeRecordValues',
            payload: {
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
                type: 'addNewRecord',
                payload: {
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

    const handleDeleteAllRecords = () => {
        dispatch({ type: 'deleteAllRecords' })
    }

    const handleUpdateFilterValues = e => {
        const name = e.target.name
        const value = e.target.value

        dispatch({
            type: 'upadteFilterValues', payload: {
                name,
                value
            }
        })
        setSortingHandled(prevState => !prevState)
    }

    useEffect(() => {

        const filterRooms = () => {

            let { date } = state.sortingValues

            let tempRecords = [...state.records];

            if (date !== "all") {
                tempRecords = tempRecords.filter(room => room.date === date);
            }

            dispatch({
                type: 'updateSortedRecords', payload: tempRecords
            })
        }

        filterRooms()
    }, [sortingHandled])


    return (
        <GlobalContext.Provider value={{
            records: state.records,
            sortedRecords: state.sortedRecords,
            recordValues: state.recordValues,
            sortingValues: state.sortingValues,
            AddRecordMessage: AddRecordMessage,
            handleChangeRecordValues,
            handleAddNewRecord,
            handleDeleteRecord,
            handleDeleteAllRecords,
            handleUpdateFilterValues
        }} >
            {props.children}
        </GlobalContext.Provider>
    )
}