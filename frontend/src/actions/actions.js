const fetchServiceRequest = () => {
    return {type: 'FETCH_SERVICE_REQUEST'}
}

const fetchServiceError = (message) => {
    return {type: 'FETCH_SERVICE_ERROR', payload: {message}}
}

const fetchServiceSuccess = (items) => {
    return {type: 'FETCH_SERVICE_SUCCESS', payload: {items}}
}

export const fetchServices = () => async (dispatch, getState) => {
    dispatch(fetchServiceRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/api/services`);
        if (response.status < 200 && response.status >= 300) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchServiceSuccess(data));
    } catch(e) {
        console.log('ошибка ', e.message )
        dispatch(fetchServiceError(e.message));
    }
}

export const fetchServicesDelete = (id, handler) => async (dispatch, getState) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/api/services/${id}`, {
            method: 'DELETE',
        });
        if (response.status < 200 && response.status >= 300) {
            throw new Error(response.statusText);
        }
        dispatch(fetchServices());
    } catch(e) {
        handler();
        dispatch(fetchServiceError(e.message));
    }
}

export const addServiceRequest = () => {
    return {type: 'ADD_SERVICE_REQUEST'}
}

export const addServiceError = (message) => {
    return {type: 'ADD_SERVICE_ERROR', payload: {message}}
}

export const addServiceSuccess = () => {
    return {type: 'ADD_SERVICE_SUCCESS'}
}

export const fetchItemServices = (id, handler) => async (dispatch, getState) => {
    dispatch(addServiceRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/api/services/${id}`);
        if (response.status < 200 && response.status >= 300) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(addServiceSuccess())
        handler(data);
    } catch(e) {
        console.log('ошибка ', e.message )
        dispatch(addServiceError(e.message));
    }
}

export const fetchAddItemServices = (newData, handler) => async (dispatch, getState) => {
    dispatch(addServiceRequest());
    try {
        const response = await fetch(`${process.env.REACT_APP_CURRENT_URL}/api/services`, {
            method: 'POST',
            body: JSON.stringify(newData)
        });
        if (response.status < 200 && response.status >= 300) {
            throw new Error(response.statusText);
        }
        dispatch(addServiceSuccess());
        handler();
    } catch(e) {
        console.log('ошибка ', e.message )
        dispatch(addServiceError(e.message));
    }
}