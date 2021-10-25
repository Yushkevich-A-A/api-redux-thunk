import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import serviceListReducer from '../reducers/serviceList/serviceList';
import thunk from 'redux-thunk';
import serviceAddReducer from '../reducers/serviceAdd/serviceAdd';

const reducers = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;