import * as connectors from '../../mongodb/connectors'

export const checkoutSchema = `
    type Checkout {
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
    createdAt: Date
    updatedAt: Date
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

export const checkoutResolver = {
    Checkout: {
        customer: ({ customer }) =>
            connectors.Customers.then(res => res.findOne({ entity_id: customer })),

        products: () =>
            connectors.Products.then(res => res.find({}).toArray()),

        addressBilling: ({ addressBilling }) =>
            connectors.Addresses.then(res => res.findOne({ entity_id: addressBilling })),

        addressShipping: ({ addressShipping }) =>
            connectors.Addresses.then(res => res.findOne({ entity_id: addressShipping })),

        shippingMethod: ({ shippingMethod }) =>
            connectors.ShippingMethods.then(res => res.findOne({ entity_id: shippingMethod })),

        paymentMethod: ({ paymentMethod }) =>
            connectors.PaymentMethods.then(res => res.findOne({ entity_id: paymentMethod })),

    },
}