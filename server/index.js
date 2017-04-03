import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import Schema from './graphql/schema'
import { port } from './config'
import matchRoutesHandler from './handlers/match.routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/graphql', (req, res, next) => {
    next()
})
app.use('/graphql', graphqlExpress(req => {
    const query = req.query.query || req.body.query

    if (query && query.length > 2000) {
      // None of our app's queries are this long
      // Probably indicates someone trying to send an overly expensive query
      throw new Error('Query too large.')
    }

    return {
        schema: Schema
    }
}))

app.use('/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql'
    })
)

app.use(express.static(path.resolve(__dirname, '../build.web/public/')))

/*app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../web/client/index.html'))
})*/

app.use(matchRoutesHandler)

app.listen(port, () => console.log(
    `Server is now running on http://localhost:${port}`
))