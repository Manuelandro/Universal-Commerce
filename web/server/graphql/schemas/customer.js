import { Orders } from '../../mongodb/connectors'

export const customerSchema = `
    type Customer {
    entity_id: ID!
    email: String
    firstname: String
    lastname: String
    orders: [Order]
    }
`

export const customerResolver = {
    Customer: {
        orders: (customer) =>
            Orders.then(res => res.find({ customer: customer.email }).toArray())
    }
}