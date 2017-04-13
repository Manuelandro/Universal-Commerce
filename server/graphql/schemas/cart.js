import { Customers, Products } from '../../mongodb/connectors'

export const cartSchema = `
    type Cart {
    entity_id: ID!
    customer: Customer
    isActive: Int!
    baseGrandTotal: Float
    productCount: Int!
    productQty: Int!
    products: [Product]
    addressBilling: Address
    addressShipping: Address
    shippingMethod: ShippingMethod
    paymentMethod: PaymentMethod
    }


    type ShippingMethod {
    entity_id: ID!
    carrierCode: String!
    carrierName: String!
    price: Float
    }

    type PaymentMethod {
    entity_id: ID!
    methodCode: String!
    methodName: String!
    price: Float
    }
`

export const cartResolver = {
    Cart: {
        customer: ({ customer }) =>
            Customers.then(res => res.findOne({ entity_id: customer })),
        products: () =>
            Products.then(res => res.find({}).toArray())
    }
}