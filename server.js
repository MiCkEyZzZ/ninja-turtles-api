import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/index.js'

import {ApolloServer} from 'apollo-server-express'
import typeDefs from './graphql/typeDefs.js'
import resolvers from './graphql/resolvers.js'
import {Character, Location, Episode} from './graphql/sources.js'

const PORT = process.env.PORT || 8080

const LOCAL = process.env.DEV_URL
const DB_URL = process.env.NODE_ENV === 'production' ? process.env.DATABASE : LOCAL

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    dataSources: () => ({
        character: new Character(),
        location: new Location(),
        episode: new Episode()
    })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('images'))
app.use(express.urlencoded({extended: true}))
app.use('/api', router)

server.applyMiddleware({app})

async function start () {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => {
            console.log(
                '\x1b[34m%s\x1b[0m',
                `
                  ${app.get('env').toUpperCase()}
                  Rest      http://localhost:${PORT}/api/
                  GraphQL   http://localhost:${PORT}${server.graphqlPath}/
                  Database  ${mongoose.connection.host}/${mongoose.connection.name}
              `
            )
        })
    } catch (error) {
        console.log('Server error', error.message)
        process.exit(1)
    }
}

start()