const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        character(id: ID!): Character
        characters(page: Int, filter: FilterCharacter): Characters
        charactersByIds(ids: [ID!]!): [Character]
        location(id: ID!): Location
        locations(page: Int, filter: FilterLocation): Locations
        locationsByIds(id: [ID!]!): [Location]
        episode(id: ID!): Episode
        episodes(page: Int, fillter: FilterEpisode): Episodes
        episodesByIds(ids: [ID!]): [Episode]
    }
    
    type Characters {
        info: Info
        results: [Character]
    }
    
    type Locations {
        info: Info
        results: [Location]
    }
    
    type Episodes {
        info: Info
        results: [Episode]
    }
    
    type Character {
        id: ID
        name: String
        status: String
        species: String
        type: String
        gender: String
        origin: Location
        location: Location
        image: String
        episode: [Episode]!
        created: String
    }
    
    type Location {
        id: ID
        name: String
        type: String
        dimension: String
        residents: [Character]!
        created: String
    }
    
    type Episode {
        id: ID
        name: String
        release: String
        episode: String
        characters: [Character]!
        created: String
    }
    
    type Info {
        count: Int
        pages: Int
        next: Int
        prev: Int
    }
    
    input FilterCharacter {
        name: String
        status: String
        species: String
        type: String
        gender: String
    }
    
    input FilterLocation {
        name: String
        type: String
        dimension: String
    }
    
    input FilterEpisode {
        name: String
        episode: String
    }
`

module.exports = typeDefs
