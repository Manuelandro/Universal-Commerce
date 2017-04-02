export const addRoute = (routes, newRoutes, component) => {
    newRoutes.map(obj => {
        const exists = routes.filter(val => val.category === obj.entity_id)

        if (exists.length > 0) {
            return true
        }

        routes.push({
            path: `/${obj.category_url}`,
            component,
            category: obj.entity_id,
            exact: true,
            key: obj.entity_id
        })

        return obj
    })

    return routes
}