import * as connectors from '../../mongodb/connectors'

export const wishlistSchema = `
    type Wishlist {
    entity_id: ID!
    customer: Customer
    products: [Product]
    name: String
    createdAt: Date
    updatedAt: Date
    }
`

export const wishlistResolver = {
    Wishlist: {
        customer: ({ customer }) =>
            connectors.Customers.then(res => res.findOne({ entity_id: customer })),
        products: ({ products }) =>
            connectors.Products.then(res => res.find({}).toArray())
    }
}