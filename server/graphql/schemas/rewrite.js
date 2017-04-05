import { Cms, Categories, Products } from '../../mongodb/connectors'

export const rewriteSchema = `
    interface Rewrite {
    entity_id: ID!
    type: String!
    path: String!
    isEnabled: Int!
    exact: Int!
    }


    type RewriteSystem implements Rewrite {
    entity_id: ID!
    type: String!
    path: String!
    isEnabled: Int!
    exact: Int!
    system: String
    }

    type RewriteCategory implements Rewrite {
    entity_id: ID!
    type: String!
    path: String!
    isEnabled: Int!
    exact: Int!
    category: Category
    }

    type RewriteProduct implements Rewrite {
    entity_id: ID!
    type: String!
    path: String!
    isEnabled: Int!
    exact: Int!
    product: Product
    }

    type RewriteCms implements Rewrite {
    entity_id: ID!
    type: String!
    path: String!
    isEnabled: Int!
    exact: Int!
    cms: Cms
    }
`

export const rewriteResolver = {
    RewriteCategory: {
        category: ({ category }) =>
            Categories.then(res => res.findOne({ entity_id: category }))
    },
    RewriteProduct: {
        product: ({ product }) =>
            Products.then(res => res.findOne({ entity_id: product }))
    },
    RewriteCms: {
        cms: ({ cms }) =>
            Cms.then(res => res.findOne({ entity_id: cms }))
    },
    Rewrite: {
        __resolveType({ type, entity_id }, context, info) {
            switch (type) {
                case 'system':
                    return info.schema.getType('RewriteSystem')
                case 'category':
                    return info.schema.getType('RewriteCategory')
                case 'product':
                    return info.schema.getType('RewriteProduct')
                case 'cms':
                    return info.schema.getType('RewriteCms')
                default:
                    return null
            }
        }
    }
}

