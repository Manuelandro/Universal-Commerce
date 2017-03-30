import { Customers, Orders, Categories, Products } from '../../mongodb/connectors'

export const rootSchema = `
    # the schema allows the following query:
    type Query {
    orders: [Order]
    customers: [Customer]
    categories: [Category]
    category(entity_id: Int!): Category
    products(category: Int!): [Product]
    product(entity_id: Int!): Product
    }

    schema {
    query: Query
    }
`

export const rootResolver = {
    Query: {
        orders: () =>
            Orders.then(res => res.find({}).toArray()),

        customers: () =>
            Customers.then(res => res.find({}).toArray()),

        category: (obj, args) =>
            Categories.then(res => res.findOne({ entity_id: args.entity_id })),

        categories: () =>
            Categories.then(res => res.find({}).toArray()),

        product: (obj, args) =>
            Products.then(res => res.findOne({ entity_id: args.entity_id })),

        products: (obj, args) =>
            Products.then(res => res.find({ category: args.category }).toArray())
    }
}