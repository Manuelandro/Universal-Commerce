import { coreSchema } from './core'
import { catalogSchema, catalogResolver } from './catalog'
import { categorySchema, categoryResolver } from './category'
import { productSchema, productResolver } from './product'
import { orderSchema, orderResolver } from './order'
import { customerSchema, customerResolver } from './customer'
import { cmsSchema } from './cms'
import { rewriteSchema, rewriteResolver } from './rewrite'
import { rootSchema, rootResolver } from './root'

const generateSchema = () => [
    coreSchema,
    catalogSchema,
    categorySchema,
    productSchema,
    orderSchema,
    customerSchema,
    cmsSchema,
    rewriteSchema,
    rootSchema
].reduce((a, b) => a + b)

const generateResolver = () =>
    Object.assign(
        catalogResolver,
        categoryResolver,
        productResolver,
        orderResolver,
        customerResolver,
        rewriteResolver,
        rootResolver
    )



export { generateSchema, generateResolver }