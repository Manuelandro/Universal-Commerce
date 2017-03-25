import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import Schema from './schema'

const PORT = 3000
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
app.get('/', (req, res) => console.log(res))


app.listen(PORT, () => console.log(
    `Server is now running on http://localhost:${PORT}`
))