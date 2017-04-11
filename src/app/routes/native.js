import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeWithData from '../../scenes/Home/index.native'
import LoginWithData from '../../scenes/Login/index.native'
import ProductListWithData from '../../scenes/ProductList/index.native'
import ProductView from '../../scenes/ProductView/index.native'


const dynamicComps = {
    Home: HomeWithData,
    Login: LoginWithData,
    category: ProductListWithData,
    product: ProductView,
}


const Routes = ({ rewrites }) => {
    const routes = rewrites.filter(obj => {
        const { isEnabled, type, system, path, entity_id } = obj

        if (isEnabled === 0) {
            return true
        }

        const component = (type === 'system')
            ? dynamicComps[system]
            : dynamicComps[type]

        return {
            path: `/${path}`,
            screen: component,
            key: entity_id
        }
    })

    return routes
}



export default StackNavigator(Routes(), {})