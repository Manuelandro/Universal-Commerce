import * as connector from '../../mongodb/connectors'

export const rootSchema = `
    # the schema allows the following query:
    type Query {
    core: Core
    orders: [Order]
    customers: [Customer]
    categories: [Category]
    category(entity_id: Int!): Category
    products(category: Int!): [Product]
    product(entity_id: Int!): Product
    rewrites: [Rewrite]
    }

    type Mutation {
    addProductToQuote: Checkout
    }

    schema {
    query: Query
    mutation: Mutation
    }
`

export const rootResolver = {
    Query: {
        core: () =>
            connector.Core.then(res => res.findOne({})),

        orders: () =>
            connector.Orders.then(res => res.find({}).toArray()),

        customers: () =>
            connector.Customers.then(res => res.find({}).toArray()),

        category: (obj, args) =>
            connector.Categories.then(res => res.findOne({ entity_id: args.entity_id })),

        categories: () =>
            connector.Categories.then(res => res.find({}).toArray()),

        product: (obj, args) =>
            connector.Products.then(res => res.findOne({ entity_id: args.entity_id })),

        products: (obj, args) =>
            connector.Products.then(res => res.find({ category: args.category }).toArray()),

        rewrites: () =>
            connector.Rewrites.then(res => res.find({}).toArray())
    },

    Mutations: {
        addProductToQuote: () => {
            connector.Checkout.then(res => res.findOne({}))
            connector.Products.then(res => res.findOne({}))
        }
    }
}