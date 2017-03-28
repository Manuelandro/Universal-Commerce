import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import Schema from './graphql/schema'
import { port } from './config'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/graphql', (req, res, next) => {
    next()
})
app.use('/graphql',
    graphqlExpress(req => ({
        schema: Schema,
        context: {
            posts: [1, 3, 4, 6]
        }
    }))
)
app.use('/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql',
        query: `{
            posts {

            }
        }`
    })
)
app.get('/', (req, res) => res)


app.listen(port, () => console.log(
    `Server is now running on http://localhost:${port}`
))