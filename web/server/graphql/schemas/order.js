import { Customers, Products } from '../../mongodb/connectors'

export const orderSchema = `
    type Order {
    entity_id: ID!
    base_grand_total: Float
    customer: Customer
    products: [Product]
    }
`

export const orderResolver = {
    Order: {
        customer: (order) =>
            Customers.then(res => res.findOne({ email: order.customer })),

        products: () =>
            Products.then(res => res.find({}).toArray())
    }
}