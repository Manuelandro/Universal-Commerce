import React from 'react'
import { Provider } from 'react-redux'
import store from './../app/store'

const OurProvider = ({ children }) =>
    <Provider store={store}>
        {children}
    </Provider>

export default OurProvider