import Login from '../../scenes/Login/index.web'
import ProductListWithData from '../../scenes/ProductList/index.web'
import ProductView from '../../scenes/ProductView/index.web'

const dynamicComponens = {
    Login,
    category: ProductListWithData,
    product: ProductView,
}


export const addRoute = (newRoutes) => {
    const routes = []

    newRoutes.filter(obj => {
        if (obj.isEnabled === 0) {
            return true
        }

        let component

        switch (obj.type) {
            case 'system':
                component = dynamicComponens[obj.system]
                break
            case 'category':
                component = dynamicComponens.category
                break
            case 'product':
                component = dynamicComponens.product
                break
            case 'cms':
                component = dynamicComponens.cms
                break
            default:
                component = () => null
        }

        routes.push({
            path: `/${obj.path}`,
            component,
            exact: true,
            key: obj.entity_id
        })

        return obj
    })

    return routes
}