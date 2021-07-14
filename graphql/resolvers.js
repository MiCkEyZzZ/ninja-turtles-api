import {checkArray, statusInfo, urlId} from '../utils/common.js'

const resolvers = {
    Query: {
        characters: async (_, {page, filter}, {dataSources}) => {
            const {results, information: stats} = await dataSources.character.getCharacters({filter, page})
            const information = statusInfo({stats})

            return {results, information}
        },
        charactersByIds: async (_, {ids}, {dataSources}) => {
            return dataSources.character.getCharacterByIds({ids})
        },
        character: async (_, {id}, {dataSources}) => {
            return dataSources.character.getCharacter({id})
        },
        locations: async (_, {page, filter}, {dataSources}) => {
            const {results, information: stats} = await dataSources.location.getLocations({filter, page})
            const information = statusInfo({stats})

            return {results, information}
        },
        locationsByIds: async (_, {ids}, {dataSources}) => {
            return dataSources.location.getLocationByIds({ids})
        },
        location: async (_, {id}, {dataSources}) => {
            return dataSources.location.getLocation({id})
        },
        episodes: async (_, {page, filter}, {dataSources}) => {
            const {results, information: stats} = await dataSources.episode.getEpisodes({filter, page})
            const information = statusInfo({stats})

            return {results, information}
        },
        episodesByIds: async (_, {ids}, {dataSources}) => {
            return dataSources.episode.getEpisodeByIds({ids})
        },
        episode: async (_, {id}, {dataSources}) => {
            return dataSources.episode.getEpisode({id})
        }
    },
    Character: {
        episode: async ({episode}, _, {dataSources}) => {
            const response = await dataSources.episode.getEpisode({id: urlId(episode)})

            return checkArray(response)
        },
        location: async ({location}, _, {dataSources}) => {
            const response = await dataSources.location.getLocation({id: urlId(location.url)})

            return response
        }
    },
    Location: {
        residents: async ({residents}, _, {dataSources}) => {
            const response = await dataSources.character.getCharacter({id: urlId(residents)})

            return checkArray(response)
        }
    },
    Episode: {
        characters: async ({characters}, _, {dataSources}) => {
            const response = await dataSources.character.getCharacter({id: urlId(characters)})

            return checkArray(response)
        }
    }
}

export default resolvers