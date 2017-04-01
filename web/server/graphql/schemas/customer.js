import { Orders } from '../../mongodb/connectors'

export const customerSchema = `
    type Group {
    entity_id: ID!
    }


    type Customer {
    entity_id: ID!
    email: String
    firstname: String
    lastname: String
    orders: [Order]
    group: Group
    }

    type Address {
    entity_id: ID!
    customer: [Customer]
    isActive: Boolean
    firstname: String
    lastname: String
    street: String
    street2: String
    city: String
    zipcode: String
    region: String
    country: String
    telephone: String
    vat: String
    isShipping: Boolean
    isBilling: Boolean
    }
`

export const customerResolver = {
    Customer: {
        orders: (customer) =>
            Orders.then(res => res.find({ customer: customer.email }).toArray())
    }
}