import React from 'react'
import { StackNavigator } from 'react-navigation'
import Login from '../../scenes/Login/index.native'
import Register from '../../scenes/Register/index.native'
import ProductList from '../../scenes/ProductList/index.native'
import About from '../../scenes/About/index.native'


const RouterComponent = StackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    ProductList: { screen: ProductList },
    About: { screen: About }
})


export default RouterComponent