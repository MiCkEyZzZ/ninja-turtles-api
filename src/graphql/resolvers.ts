import { checkArray, handleInfo, urlId } from '../utils/common'

/**
 * Функция characters
 * @function
 * @param _
 * @param page
 * @param filter
 * @param dataSources
 *
 * Функция charactersByIds
 * @function
 * @param _
 * @param ids
 * @param dataSources
 *
 * Функция character
 * @function
 * @param _
 * @param id
 * @param dataSources
 *
 * Функция locations
 * @function
 * @param _
 * @param page
 * @param filter
 * @param dataSources
 *
 * Функция locationsByIds
 * @function
 * @param _
 * @param ids
 * @param dataSources
 *
 * Функция location
 * @function
 * @param _
 * @param id
 * @param dataSources
 *
 * Функция episodes
 * @function
 * @param _
 * @param page
 * @param filter
 * @param dataSources
 *
 * Функция episodesByIds
 * @function
 * @param _
 * @param ids
 * @param dataSources
 *
 * Функция episode
 * @function
 * @param _
 * @param id
 * @param dataSources
 *
 * Функция location
 * @function
 * @param location
 * @param _
 * @param dataSources
 *
 * Функция episode
 * @function
 * @param episode
 * @param _
 * @param dataSources
 *
 * Функция characters
 * @function
 * @param characters
 * @param _
 * @param dataSources
 *
 * Функция characters
 * @function
 * @param characters
 * @param _
 * @param dataSources
 */

const resolvers = {
  Query: {
    characters: async (_: null, { page, filter }: any, { dataSources }: any) => {
      const { results, information: stats } =
        await dataSources.character.getCharacters({ filter, page })
      const information = handleInfo({ stats })

      return { results, information }
    },
    charactersByIds: async (_: null, { ids }: any, { dataSources }: any) =>
      dataSources.character.getCharactersById({ ids }),
    character: async (_: null, { id }: any, { dataSources }: any) =>
      dataSources.character.getCharacter({ id }),
    locations: async (_: null, { page, filter }: any, { dataSources }: any) => {
      const { results, information: stats } =
        await dataSources.location.getLocations({ filter, page })
      const information = handleInfo({ stats })

      return { results, information }
    },
    locationsByIds: async (_: null, { ids }: any, { dataSources }: any) =>
      dataSources.location.getLocationsById({ ids }),
    location: async (_: null, { id }: any, { dataSources }: any) =>
      dataSources.location.getLocation({ id }),
    episodes: async (_: null, { page, filter }: any, { dataSources }: any) => {
      const { results, information: stats } =
        await dataSources.episode.getEpisodes({ filter, page })
      const information = handleInfo({ stats })

      return { results, information }
    },
    episodesByIds: async (_: null, { ids }: any, { dataSources }: any) =>
      dataSources.episode.getEpisodesById({ ids }),
    episode: async (_: null, { id }: any, { dataSources }: any) =>
      dataSources.episode.getEpisode({ id }),
  },
  Character: {
    location: async ({ location }: any, _: null, { dataSources }: any) => {
      const response = await dataSources.location.getLocation({
        id: urlId(location.url),
      })

      return response
    },
    episode: async ({ episode }: any, _: null, { dataSources }: any) => {
      const response = await dataSources.episode.getEpisode({
        id: urlId(episode),
      })

      return checkArray(response)
    },
  },
  Location: {
    residents: async ({ characters }: any, _: null, { dataSources }: any) => {
      const response = await dataSources.character.getCharacter({
        id: urlId(characters),
      })

      return checkArray(response)
    },
  },
  Episode: {
    characters: async ({ characters }: any, _: null, { dataSources }: any) => {
      const response = await dataSources.character.getCharacter({
        id: urlId(characters),
      })

      return checkArray(response)
    },
  },
}

export default resolvers
