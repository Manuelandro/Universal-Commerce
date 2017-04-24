import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export const scalarTypesSchema = `
    scalar Date
    scalar Url
`

export const scalarTypesResolver = {
    Date: new GraphQLScalarType({
        name: 'Scalar Type Date',
        serialize: value => value.getTime(),
        parseValue: value => new Date(value),
        parseLiteral: ast => (ast.kind === Kind.INT) ? parseInt(ast.value, 10) : null
    }),
    Url: new GraphQLScalarType({
        serialize: value => value,
        parseValue: value => value,
        parseLiteral: ast => (ast.kind === Kind.STRING) ? ast.value : null
    })
}