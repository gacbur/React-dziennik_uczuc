export const AppReducer = (state, action) => {

    const { name, value } = action.payload

    switch (action.type) {
        case 'changeRecordValues':
            return {
                ...state,
                recordValues: {
                    ...state.recordValues,
                    [name]: value
                }
            }
        default:
            return state
    }
} 
