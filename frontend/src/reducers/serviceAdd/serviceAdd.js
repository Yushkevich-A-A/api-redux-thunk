const initItem = {
    item : {
        id: null,
        name: '',
        price: 0,
        content: '',
    },
    loading: false,
    error: null,
}

function serviceAddReducer (state = initItem, action) {
    switch (action.type) {
        case 'ADD_SERVICE_REQUEST':
            return {...state, loading: true};
        case 'ADD_SERVICE_ERROR':
            const { message } = action.payload;
            return {...state, loading: false, error: message};
        case 'ADD_SERVICE_SUCCESS':
            return {...initItem};
        default:
            return state;
    }
}

export default serviceAddReducer;