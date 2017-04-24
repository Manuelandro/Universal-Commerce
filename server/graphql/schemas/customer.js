import * as connectors from '../../mongodb/connectors'

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
    address: [Address]
    checkout: [Checkout]
    wishlist: [Wishlist]
    group: Group
    }
`

export const customerResolver = {
    Customer: {
        orders: ({ entity_id }) =>
            connectors.Orders.then(res => res.find({ customer: entity_id }).toArray()),

        address: ({ entity_id }) =>
            connectors.Addresses.then(res => res.find({ customer: entity_id }).toArray()),

        checkout: ({ entity_id }) =>
            connectors.Checkout.then(res => res.find({ customer: entity_id }).toArray()),

        wishlist: ({ entity_id }) =>
            connectors.wishlist.then(res => res.find({ customer: entity_id }).toArray())
    }
}