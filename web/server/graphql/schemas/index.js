import { catalogSchema, catalogResolver } from './catalog'
import { categorySchema, categoryResolver } from './category'
import { productSchema, productResolver } from './product'
import { orderSchema, orderResolver } from './order'
import { customerSchema, customerResolver } from './customer'
import { rootSchema, rootResolver } from './root'

const generateSchema = () => [
    catalogSchema,
    categorySchema,
    productSchema,
    orderSchema,
    customerSchema,
    customerSchema,
    rootSchema
].reduce((a, b) => a + b)

const generateResolver = () =>
    Object.assign(
        catalogResolver,
        categoryResolver,
        productResolver,
        orderResolver,
        customerResolver,
        rootResolver
    )



export { generateSchema, generateResolver }