
export const AppReducer = (state, action) => {

    switch (action.type) {
        case 'changeRecordValues':
            return {
                ...state,
                recordValues: {
                    ...state.recordValues,
                    [action.payload.name]: action.payload.value
                },
                sortingValues: {
                    ...state.sortingValues
                },
            }
        case 'addNewRecord':
            return {
                records: [
                    ...state.records,
                    action.payload
                ],
                sortedRecords: [
                    ...state.sortedRecords
                ],
                recordValues: action.payload,
                sortingValues: {
                    ...state.sortingValues
                },
            }
        case 'resetInputvalues':
            return {
                records: [
                    ...state.records
                ],
                sortedRecords: [
                    ...state.sortedRecords
                ],
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
                },
                sortingValues: {
                    ...state.sortingValues
                },
            }
        case 'deleteRecord':
            return {
                records: action.payload,
                sortedRecords: [
                    ...state.sortedRecords
                ],
                recordValues: {
                    ...state.recordValues
                },
                sortingValues: {
                    ...state.sortingValues
                },
            }
        case 'deleteAllRecords':
            return {
                records: [],
                sortedRecords: [],
                recordValues: {
                    ...state.recordValues
                }
                , sortingValues: {
                    ...state.sortingValues
                }
            }
        case 'upadteFilterValues':
            return {
                records: [
                    ...state.records
                ],
                sortedRecords: [
                    ...state.sortedRecords
                ],
                recordValues: {
                    ...state.recordValues
                },
                sortingValues: {
                    ...state.sortingValues,
                    [action.payload.name]: action.payload.value
                }
            }
        case 'updateSortedRecords':
            return {
                records: [
                    ...state.records
                ],
                sortedRecords: action.payload,
                recordValues: {
                    ...state.recordValues
                },
                sortingValues: {
                    ...state.sortingValues,
                }
            }
        default:
            return state
    }
} 
