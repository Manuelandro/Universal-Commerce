import React, { Component } from 'react'
import { Route } from 'react-router'
import { addRoute } from './addRoute'
import Login from '../../scenes/Login/index.web'
import ProductListWithData from '../../scenes/ProductList/index.web'
import ProductView from '../../scenes/ProductView/index.web'
import About from '../../scenes/About/index.web'


/* to fix ths
    https://reacttraining.com/react-router/web/api/Route/render-func
    const WrappedProductList = () => <ProductListWithData category={entity_id} />
)*/

let routes = [
    {
        path: '/',
        component: Login,
        key: 0,
        exact: true
    }
]

const Routes = ({ categories }) => {
    routes = addRoute(routes, categories, ProductListWithData)
    return (
        <div>
            {routes.map(route => (
                <Route {...route} />
            ))}
        </div>
    )
}


export default Routes