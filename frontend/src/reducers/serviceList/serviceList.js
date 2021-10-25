const initialList = {
    items: [],
    loading: false,
    error: null,
}

function serviceListReducer (state = initialList, action) {
    switch (action.type) {
        case 'FETCH_SERVICE_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SERVICE_ERROR':
            const { message } = action.payload;
            return {...state, loading: false, error: message};
        case 'FETCH_SERVICE_SUCCESS':
            const  { items } = action.payload
            return {...state, items, loading: false, error: null, };
        default:
            return state;
    }
}

export default serviceListReducer;