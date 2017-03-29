/* global window:false */
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const theReducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk,
        routerMiddleware(createBrowserHistory())
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
    { storage: localForage }
)

// https://github.com/reactjs/react-router-redux/issues/442
const history = syncHistoryWithStore(
    browserHistory,
    store
)

if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default)
    })
}


export default store
export { history }