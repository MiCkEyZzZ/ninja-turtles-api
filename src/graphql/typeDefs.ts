import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    character(id: ID!): Character
    characters(page: Int, filter: FilterCharacter): Characters
    charactersByIds(ids: [ID!]!): [Character]
    location(id: ID!): Location
    locations(page: Int, filter: FilterLocation): Locations
    locationsByIds(id: [ID!]!): [Location]
    episode(id: ID!): Episode
    episodes(page: Int, filter: FilterEpisode): Episodes
    episodesByIds(id: [ID!]!): [Episode]
  }

  type Characters {
    info: Info
    data: [Character]
  }

  type Locations {
    info: Info
    data: [Location]
  }

  type Episodes {
    info: Info
    data: [Episode]
  }

  type Character {
    id: ID
    name: String
    status: String
    species: String
    location: Location
    occupation: String
    gender: String
    episode: Episode
    weapons: [String]
    affiliation: String
    bandana_color: String
    image_cover: String
    url: String
    createdAt: String
  }

  type Location {
    id: ID
    name: String
    type: String
    dimension: String
    residents: [Character]!
    url: String
    image_cover: String
    images: [String]
    createdAt: String
  }

  type Episode {
    id: ID
    name: String
    episode: String
    producers: [String]
    season: String
    air_date: String
    characters: [Character]!
    image_cover: String
    url: String
    createdAt: String
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
    occupation: String
  }

  input FilterLocation {
    name: String
    type: String
    dimension: String
  }

  input FilterEpisode {
    name: String
    episode: String
    season: String
  }
`

export default typeDefs
