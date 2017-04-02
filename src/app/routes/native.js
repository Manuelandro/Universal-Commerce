import React from 'react'
import { StackNavigator } from 'react-navigation'
import Login from '../../scenes/Login/index.native'
import Register from '../../scenes/Register/index.native'
import ProductListWithData from '../../scenes/ProductList/index.native'
import About from '../../scenes/About/index.native'


const Routes = StackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },
    ProductList: { screen: ProductListWithData },
    About: { screen: About }
})


export default Routes