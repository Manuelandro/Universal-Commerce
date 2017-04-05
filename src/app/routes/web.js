import React from 'react'
import { Route } from 'react-router'
import { addRoute } from './addRoute'


/* to fix ths
    https://reacttraining.com/react-router/web/api/Route/render-func
    const WrappedProductList = () => <ProductListWithData category={entity_id} />
)*/

const Routes = ({ rewrites }) => {
    const routes = addRoute(rewrites)
    console.log(routes)
    return (
        <div>
            {routes.map(route => (
                <Route {...route} />
            ))}
        </div>
    )
}


export default Routes