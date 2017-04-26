const schemas = `


    scalar Date
    scalar Url


    type Address {
    id: ID!
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


    type Catalog {
    id: ID!
    name: String
    }


    type Category {
    id: ID!
    name: String
    catalog: Catalog
    urlRewrite: Rewrite
    products: [Product]
    }


    type Checkout {
    id: ID!
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


    type Cms {
    id: ID!
    metaKeywords: String
    metaDescription: String
    content: String
    isEnabled: Int!
    }


    type Core {
    id: ID!
    store: CoreStore
    language: String!
    }


    type CoreStore {
    id: ID!
    storeName: String!
    storeCountry: String!
    storeCurrency: String!
    }


    type CoreResource {
    id: ID!
    websiteUrl: Url
    staticUrl: Url
    }


    type CoreDesign {
    id: ID!
    theme: String
    }


    type Customer {
    id: ID!
    email: String
    firstname: String
    lastname: String
    orders: [Order]
    address: [Address]
    checkout: [Checkout]
    wishlist: [Wishlist]
    group: Group
    }


    type Group {
    id: ID!
    }


    type Mutation {
    addProductToQuote: Checkout
    addProductToWish: Wishlist
    }


    type Order {
    id: ID!
    base_grand_total: Float
    customer: Customer
    products: [Product]
    }


    type PaymentMethod {
    id: ID!
    methodCode: String!
    methodName: String!
    price: Float
    }


    type Product {
    id: ID!
    sku: String!
    name: String
    enabled: Boolean!
    price: Float
    description: String
    brand: String
    region: String
    small_image: String
    inventory: Int!
    urlRewrite: Rewrite
    category: [Category]
    }


    type Query {
    core: Core
    orders: [Order]
    customers: [Customer]
    categories: [Category]
    category(id: Int!): Category
    products(category: Int!): [Product]
    product(id: Int!): Product
    rewrites: [Rewrite]
    }


    interface Rewrite {
    id: ID!
    type: String!
    path: String!
    isEnabled: Int!
    exact: Int!
    }


    type RewriteSystem implements Rewrite {
    id: ID!
    type: String!
    path: String!
    isEnabled: Int!
    exact: Int!
    system: String
    }


    type RewriteCategory implements Rewrite {
    id: ID!
    type: String!
    path: String!
    isEnabled: Int!
    exact: Int!
    category: Category
    }


    type RewriteProduct implements Rewrite {
    id: ID!
    type: String!
    path: String!
    isEnabled: Int!
    exact: Int!
    product: Product
    }


    type RewriteCms implements Rewrite {
    id: ID!
    type: String!
    path: String!
    isEnabled: Int!
    exact: Int!
    cms: Cms
    }


    type ShippingMethod {
    id: ID!
    carrierCode: String!
    carrierName: String!
    price: Float
    }


    schema {
    query: Query
    mutation: Mutation
    }


    type Wishlist {
    id: ID!
    customer: Customer
    products: [Product]
    name: String
    createdAt: Date
    updatedAt: Date
    }

`

export default schemas