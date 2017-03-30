import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const schema = `
    type Customer {
    entity_id: ID!
    email: String
    firstname: String
    lastname: String
    orders: [Order]
    }

    type Order {
    entity_id: ID!
    base_grand_total: Float
    customer: Customer
    products: [Product]
    }

    type Catalog {
    entity_id: ID!
    name: String
    }

    type Category {
    entity_id: ID!
    name: String
    catalog: Catalog
    category_url: String
    products: [Product]
    }

    type Product {
    entity_id: ID!
    sku: String!
    name: String
    enabled: Boolean!
    price: Float
    description: String
    brand: String
    region: String
    small_image: String
    product_url: String
    category: Category
    }

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

export default makeExecutableSchema({ typeDefs: [schema], resolvers })