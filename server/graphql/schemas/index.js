import { scalarTypesSchema, scalarTypesResolver } from './scalar.types'

import { coreSchema } from './core'
import { catalogSchema, catalogResolver } from './catalog'
import { categorySchema, categoryResolver } from './category'
import { productSchema, productResolver } from './product'
import { checkoutSchema, checkoutResolver } from './checkout'
import { addressSchema, addressResolver } from './address'
import { orderSchema, orderResolver } from './order'
import { customerSchema, customerResolver } from './customer'
import { cmsSchema } from './cms'
import { rewriteSchema, rewriteResolver } from './rewrite'
import { rootSchema, rootResolver } from './root'

const generateSchema = () => [
    scalarTypesSchema,
    coreSchema,
    catalogSchema,
    categorySchema,
    productSchema,
    checkoutSchema,
    addressSchema,
    orderSchema,
    customerSchema,
    cmsSchema,
    rewriteSchema,
    rootSchema
].reduce((a, b) => a + b)

const generateResolver = () =>
    Object.assign(
        scalarTypesResolver,
        catalogResolver,
        categoryResolver,
        productResolver,
        checkoutResolver,
        addressResolver,
        orderResolver,
        customerResolver,
        rewriteResolver,
        rootResolver
    )


export { generateSchema, generateResolver }