import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import * as cn from '../../mongodb/connectors'

const resolvers = {

    Address: {
        customer: ({ customer }) => cn.Customers.then(res => res.findOne({ id: customer }))
    },

    Category: {
        catalog: ({ catalog }) => cn.Catalogs.then(res => res.find({ id: catalog }).toArray()),
        urlRewrite: ({ id }) => cn.Rewrites.then(res => res.findOne({ category: id })),
        products: ({ id }) => cn.Products.then(res => res.find({ category: id }).toArray()),
    },

    Checkout: {
        customer: ({ customer }) => cn.Customers.then(res => res.findOne({ id: customer })),
        products: () => cn.Products.then(res => res.find({}).toArray()),
        addressBilling: ({ addressBilling }) => cn.Addresses.then(res => res.findOne({ id: addressBilling })),
        addressShipping: ({ addressShipping }) => cn.Addresses.then(res => res.findOne({ id: addressShipping })),
        shippingMethod: ({ shippingMethod }) => cn.ShippingMethods.then(res => res.findOne({ id: shippingMethod })),
        paymentMethod: ({ paymentMethod }) => cn.PaymentMethods.then(res => res.findOne({ id: paymentMethod })),
    },

    Customer: {
        orders: ({ id }) => cn.Orders.then(res => res.find({ customer: id }).toArray()),
        address: ({ id }) => cn.Addresses.then(res => res.find({ customer: id }).toArray()),
        checkout: ({ id }) => cn.Checkout.then(res => res.find({ customer: id }).toArray()),
        wishlist: ({ id }) => cn.wishlist.then(res => res.find({ customer: id }).toArray())
    },

    Date: new GraphQLScalarType({
        name: 'ScalarTypeDate',
        serialize: value => value.getTime(),
        parseValue: value => new Date(value),
        parseLiteral: ast => (ast.kind === Kind.INT) ? parseInt(ast.value, 10) : null
    }),

    Mutation: {
        addProductToQuote: () => {
            cn.Checkout.then(res => res.findOne({}))
            cn.Products.then(res => res.findOne({}))
        },
        addProductToWish: () => {

        }
    },

    Order: {
        customer: ({ customer }) => cn.Customers.then(res => res.findOne({ email: customer })),
        products: () => cn.Products.then(res => res.find({}).toArray())
    },

    Product: {
        category: ({ category }) => cn.Categories.then(res => res.find({ id: category }).toArray()),
        urlRewrite: ({ id }) => cn.Rewrites.then(res => res.findOne({ product: id }))
    },

    Query: {
        core: () => cn.Core.then(res => res.findOne({})),
        orders: () => cn.Orders.then(res => res.find({}).toArray()),
        customers: () => cn.Customers.then(res => res.find({}).toArray()),
        category: (obj, args) => cn.Categories.then(res => res.findOne({ id: args.id })),
        categories: () => cn.Categories.then(res => res.find({}).toArray()),
        product: (obj, args) => cn.Products.then(res => res.findOne({ id: args.id })),
        products: (obj, args) => cn.Products.then(res => res.find({ category: args.category }).toArray()),
        rewrites: () => cn.Rewrites.then(res => res.find({}).toArray())
    },

    RewriteCategory: {
        category: ({ category }) => cn.Categories.then(res => res.findOne({ id: category }))
    },

    RewriteProduct: {
        product: ({ product }) => cn.Products.then(res => res.findOne({ id: product }))
    },

    RewriteCms: {
        cms: ({ cms }) => cn.Cms.then(res => res.findOne({ id: cms }))
    },

    Rewrite: {
        __resolveType({ type, id }, context, info) {
            switch (type) {
                case 'system':
                    return info.schema.getType('RewriteSystem')
                case 'category':
                    return info.schema.getType('RewriteCategory')
                case 'product':
                    return info.schema.getType('RewriteProduct')
                case 'cms':
                    return info.schema.getType('RewriteCms')
                default:
                    return null
            }
        }
    },

    Url: new GraphQLScalarType({
        name: 'ScalarTypeUrl',
        serialize: value => value,
        parseValue: value => value,
        parseLiteral: ast => (ast.kind === Kind.STRING) ? ast.value : null
    }),

    Wishlist: {
        customer: ({ customer }) => cn.Customers.then(res => res.findOne({ id: customer })),
        products: ({ products }) => cn.Products.then(res => res.find({}).toArray())
    },

}

export default resolvers