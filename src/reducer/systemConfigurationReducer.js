const initialState = {
    data: {},
    error: {}
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'SYSTEM_CONFIGURATION_SUCCESS':
        debugger;
            state = {
                ...state,
                data: action.payload.item
            };
            return state;
        case 'SYSTEM_CONFIGURATION_ERROR':
            state = {
                ...state,
                data :{},
                error: action.payload
            };
            return state;
        default:
            return state;
    }
};
export default store;
