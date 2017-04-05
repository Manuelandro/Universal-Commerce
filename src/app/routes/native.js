import React from 'react'
import { StackNavigator } from 'react-navigation'
import Login from '../../scenes/Login/index.native'
import Register from '../../scenes/Register/index.native'
import ProductListWithData from '../../scenes/ProductList/index.native'
import About from '../../scenes/About/index.native'


let routes = {
    Login: {
        screen: Login,
        path: '/'
    },
    Register: {
        screen: Register,
        path: '/register'
    },
}


export default StackNavigator(routes, {})