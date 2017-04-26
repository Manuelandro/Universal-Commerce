import { makeExecutableSchema } from 'graphql-tools'
import schemas from './schemas'
import resolvers from './resolvers'


export default makeExecutableSchema({
    typeDefs: [schemas],
    resolvers
})