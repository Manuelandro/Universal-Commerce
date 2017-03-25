import { makeExecutableSchema } from 'graphql-tools'

const schema = `
    type Author {
    id: ID! # the ! means that every author object _must_ have an id
    firstName: String
    lastName: String
    books: [Book] # the list of Books by this author
    }

    type Book {
    id: ID!
    title: String
    author: Author
    votes: Int
    }

    # the schema allows the following query:
    type Query {
    books: [Book]
    authors: [Author]
    }

    # we need to tell the server which types represent the root query
    # and root mutation types. We call them RootQuery and RootMutation by convention.
    schema {
    query: Query
    }
`

const resolvers = {
    Query: {
        books() {
            return [{ title: 'Ciao' }, { title: 'Ciao ciao' }, { title: 'Bambina' }]
        },
        authors() {
            return [{ firstName: 'Mark', lastName: 'Twain' }]
        }
    },
    Author: {
        books() {
            return [{ title: 'Ciao' }, { title: 'Ciao ciao' }]
        }
    },
    Book: {
        author() {
            return { firstName: 'Mark', lastName: 'Twain' }
        }
    }
}

export default makeExecutableSchema({ typeDefs: [schema], resolvers })