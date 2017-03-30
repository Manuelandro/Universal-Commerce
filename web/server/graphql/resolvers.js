import { Customers, Orders, Catalogs, Categories, Products } from '../mongodb/connectors'

const resolvers = {
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
    },
    Customer: {
        orders: (customer) =>
            Orders.then(res => res.find({ customer: customer.email }).toArray())
    },
    Category: {
        catalog: (category) =>
            Catalogs.then(res => res.find({ entity_id: category.catalog }).toArray()),

        products: () =>
            Products.then(res => res.find({}).toArray()),
    },
    Product: {
        category: (product) =>
            Categories.then(res => res.find({ entity_id: product.category }).toArray())
    },
    Order: {
        customer: (order) =>
            Customers.then(res => res.findOne({ email: order.customer })),

        products: () =>
            Products.then(res => res.find({}).toArray())
    }
}

export default resolvers