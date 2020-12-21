
export const AppReducer = (state, action) => {

    switch (action.type) {
        case 'changeRecordValues':
            return {
                ...state,
                recordValues: {
                    ...state.recordValues,
                    [action.payload.name]: action.payload.value
                }
            }
        case 'addNewRecord':
            return {
                records: [
                    ...state.records,
                    action.payload
                ],
                recordValues: action.payload
            }
        case 'resetInputvalues':
            return {
                records: [
                    ...state.records
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
                }
            }
        case 'deleteRecord':
            return {
                records: action.payload,
                recordValues: {
                    ...state.recordValues
                }
            }
        default:
            return state
    }
} 
