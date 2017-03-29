/* global window:false */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import reducers from '../reducers/'

const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const theReducer = combineReducers({ ...reducers })

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk
    ),
    autoRehydrate()
)


const store = createStore(
    theReducer,
    initialState,
    enhancer
)

persistStore(
    store,
    { storage: AsyncStorage }
)


export default store