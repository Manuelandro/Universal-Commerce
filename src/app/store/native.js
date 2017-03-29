/* global window:false */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import reducers from '../reducers/'

const theReducer = combineReducers({ ...reducers })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(theReducer, composeEnhancers(applyMiddleware(thunk)))

persistStore(
    store,
    { storage: AsyncStorage
})

export default store