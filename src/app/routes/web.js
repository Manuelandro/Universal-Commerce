import React from 'react'
import SuperRoute from '../../components/common/super.route'

import HomeWithData from '../../scenes/Home/index.web'
import LoginWithData from '../../scenes/Login/index.web'
import ProductListWithData from '../../scenes/ProductList/index.web'
import ProductViewWithData from '../../scenes/ProductView/index.web'


const dynamicComps = {
    Home: HomeWithData,
    Login: LoginWithData,
    category: ProductListWithData,
    product: ProductViewWithData,
}


const Routes = ({ rewrites }) => {
    const routes = []

    rewrites.filter(obj => {
        const { isEnabled, type, system, path, entity_id } = obj

        if (isEnabled === 0) {
            return false
        }

        const component = (type === 'system')
            ? dynamicComps[system]
            : dynamicComps[type]

        const property = (type === 'system')
            ? system
            : type


        const thisRoute = {
            path: `/${path}`,
            component,
            exact: true,
            key: entity_id
        }

        thisRoute[property] = obj[property]

        routes.push(thisRoute)

        return obj
    })


    return (
        <div>
            {routes.map(route => (
                <SuperRoute {...route} />
            ))}
        </div>
    )
}


export default Routes