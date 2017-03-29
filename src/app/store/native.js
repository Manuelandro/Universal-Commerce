/* global window:false */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/'

const theReducer = combineReducers({ ...reducers })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(theReducer, composeEnhancers(applyMiddleware(thunk)))

export default store