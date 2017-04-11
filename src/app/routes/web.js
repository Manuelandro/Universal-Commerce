import React from 'react'
import { Route } from 'react-router'

import HomeWithData from '../../scenes/Home/index.web'
import LoginWithData from '../../scenes/Login/index.web'
import ProductListWithData from '../../scenes/ProductList/index.web'
import ProductView from '../../scenes/ProductView/index.web'


/* to fix ths
    https://reacttraining.com/react-router/web/api/Route/render-func
    const WrappedProductList = () => <ProductListWithData category={entity_id} />
)*/

const dynamicComps = {
    Home: HomeWithData,
    Login: LoginWithData,
    category: ProductListWithData,
    product: ProductView,
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

        routes.push({
            path: `/${path}`,
            component,
            exact: true,
            key: entity_id
        })

        return obj
    })

    return (
        <div>
            {routes.map(route => (
                <Route {...route} />
            ))}
        </div>
    )
}


export default Routes