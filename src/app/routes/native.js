import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeWithData from '../../scenes/Home/index.native'
import LoginWithData from '../../scenes/Login/index.native'
import ProductListWithData from '../../scenes/ProductList/index.native'
import ProductViewWithData from '../../scenes/ProductView/index.native'


const dynamicComps = {
    Home: HomeWithData,
    Login: LoginWithData,
    category: ProductListWithData,
    product: ProductViewWithData,
}


const Routes = ({ rewrites }) => {
    const routes = rewrites.filter(obj => {
        const { isEnabled, type, system, path, id } = obj

        if (isEnabled === 0) {
            return true
        }

        const component = (type === 'system')
            ? dynamicComps[system]
            : dynamicComps[type]

        const property = (type === 'system')
            ? system
            : type

        const thisRoute = {
            path: `/${path}`,
            screen: component,
            key: id
        }

        thisRoute[property] = obj[property]

        return thisRoute
    })

    return routes
}



export default StackNavigator(Routes(), {})