import { Categories, Rewrites } from '../../mongodb/connectors'

export const productSchema = `
    type Product {
    entity_id: ID!
    sku: String!
    name: String
    enabled: Boolean!
    price: Float
    description: String
    brand: String
    region: String
    small_image: String
    inventory: Int!
    urlRewrite: Rewrite
    category: [Category]
    }
`

export const productResolver = {
    Product: {
        category: ({ category }) =>
            Categories.then(res => res.find({ entity_id: category }).toArray()),

        urlRewrite: ({ entity_id }) =>
            Rewrites.then(res => res.findOne({ product: entity_id }))
    }
}