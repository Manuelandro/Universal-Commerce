import * as connectors from '../../mongodb/connectors'

export const addressSchema = `
    type Address {
    entity_id: ID!
    customer: Customer
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
    isDefaultBilling: Boolean
    isDefaultShipping: Boolean
    }
`

export const addressResolver = {
    Address: {
        customer: ({ customer }) =>
            connectors.Customers.then(res => res.findOne({ entity_id: customer }))
    }
}