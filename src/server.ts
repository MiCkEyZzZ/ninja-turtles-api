import dotenv from 'dotenv'

import { ApolloServer } from 'apollo-server-express'
import app from './app'

import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
import { Character, Location, Episode } from './graphql/sources'

dotenv.config({ path: './.env' })

const isProduction = process.env.NODE_ENV === 'production'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  dataSources: () => ({
    character: new Character(),
    location: new Location(),
    episode: new Episode()
  }),
})

server.applyMiddleware({ app })

const PORT = process.env.PORT || 8181

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(
        '\x1b[34m%s\x1b[0m',
        `
          ${app.get('env').toUpperCase()}
          🚀 Rest      http://localhost:${PORT}/api
          🚀 GraphQL   http://localhost:${PORT}/api${server.graphqlPath}
        `
      )
    })
  } catch (err: any) {
    console.error(err.name, err.message)
    console.log('Unhandled rejection. Shutting down...')
    process.exit(1)
  }
}

start()

export default server
