import { Categories } from '../../mongodb/connectors'

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
    product_url: String
    category: Category
    }
`

export const productResolver = {
    Product: {
        category: (product) =>
            Categories.then(res => res.find({ entity_id: product.category }).toArray())
    }
}