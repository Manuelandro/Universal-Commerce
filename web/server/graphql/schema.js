import { makeExecutableSchema } from 'graphql-tools'
import { generateSchema, generateResolver } from './schemas'

export default makeExecutableSchema({
    typeDefs: [generateSchema()],
    resolvers: generateResolver()
})