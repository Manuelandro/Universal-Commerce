import React from 'react'
import { StackNavigator } from 'react-navigation'
import Login from '../../scenes/Login/index.native'
import Register from '../../scenes/Register/index.native'
import ProductListWithData from '../../scenes/ProductList/index.native'
import About from '../../scenes/About/index.native'


const Routes = StackNavigator({
    Login: {
        screen: Login,
        path: '/'
    },
    Register: {
        screen: Register,
        path: '/register'
    },
    ProductList: {
        screen: ProductListWithData,
        path: '/productslist'
    },
    About: {
        screen: About,
        path: '/about'
    }
}, {

})


export default Routes