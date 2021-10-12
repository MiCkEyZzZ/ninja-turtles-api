const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './.env'})
const app = require('./app')

const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { Character, Location, Episode } = require('./graphql/sources')

const DB_URL = process.env.DATABASE.replace(
    `<PASSWORD>`,
    process.env.DATABASE_PASSWORD
)

const PORT = process.env.PORT || 8080

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

server.applyMiddleware({ app })

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
                  Rest      http://localhost:${PORT}/api/v1/
                  GraphQL   http://localhost:${PORT}${server.graphqlPath}/
                  Database  ${mongoose.connection.host}/${mongoose.connection.name}
              `
            )
        })
    } catch (err) {
        console.error(err.name, err.message)
        console.log('Unhandled rejection. Shutting down...')
        process.exit(1)
    }
}

start()

module.exports = server
