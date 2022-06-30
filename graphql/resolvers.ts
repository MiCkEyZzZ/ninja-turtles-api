import { checkArray, handleInfo, urlId } from '../src/utils'
import {
	ICharacters,
	ILocations,
	IEpisodes,
	ILocation,
	ICharacter,
	IEpisode,
	FilterParametersCharacters,
	FilterParametersLocations,
	FilterParametersEpisodes,
	FilterParameterCharacter,
	FilterParameterLocation,
	FilterParameterEpisode,
} from '../src/interfaces'

const resolvers = {
	Query: {
		characters: async (
			_: any,
			{ page, filter }: FilterParametersCharacters,
			{ dataSources }: any,
		): Promise<ICharacters> => {
			const { data, info: stats } = await dataSources.character
				.getCharacters({ filter, page })
				.catch((error: any) => console.log('FILTER', error))
			const info = handleInfo({ stats })

			return { data, info }
		},
		charactersByIds: async (_: null, { ids }: any, { dataSources }: any): Promise<ICharacter> => {
			return await dataSources.character.getCharactersById({ ids }).catch((error: any) => console.log('IDs', error))
		},
		character: async (_: null, { id }: FilterParameterCharacter, { dataSources }: any): Promise<ICharacter> => {
			return await dataSources.character.getCharacter({ id })
		},
		locations: async (
			_: null,
			{ page, filter }: FilterParametersLocations,
			{ dataSources }: any,
		): Promise<ILocations> => {
			const { data, info: stats } = await dataSources.location
				.getLocations({ filter, page })
				.catch((error: any) => console.log('', error))
			const info = handleInfo({ stats })

			return { data, info }
		},
		locationsByIds: async (_: null, { ids }: any, { dataSources }: any): Promise<ILocation> => {
			return await dataSources.location.getLocationsById({ ids })
		},
		location: async (_: null, { id }: FilterParameterLocation, { dataSources }: any): Promise<ILocation> => {
			return await dataSources.location.getLocation({ id })
		},
		episodes: async (_: null, { page, filter }: FilterParametersEpisodes, { dataSources }: any): Promise<IEpisodes> => {
			const { data, information: stats } = await dataSources.episode.getEpisodes({ filter, page })
			const info = handleInfo({ stats })

			return { data, info }
		},
		episodesByIds: async (_: null, { ids }: any, { dataSources }: any): Promise<IEpisode> => {
			return dataSources.episode.getEpisodesById({ ids })
		},
		episode: async (_: null, { id }: FilterParameterEpisode, { dataSources }: any): Promise<IEpisode> => {
			return await dataSources.episode.getEpisode({ id })
		},
	},
	Character: {
		location: async ({ location }: any, _: null, { dataSources }: any): Promise<ILocation> => {
			return await dataSources.location.getLocation({
				id: urlId(location.url),
			})
		},
		episode: async ({ episode }: any, _: null, { dataSources }: any): Promise<IEpisode[]> => {
			const data = await dataSources.episode.getEpisode({
				id: urlId(episode),
			})

			return checkArray(data)
		},
	},
	Location: {
		residents: async ({ characters }: any, _: null, { dataSources }: any): Promise<ILocation[]> => {
			const data = await dataSources.character.getCharacter({ id: urlId(characters) })

			return checkArray(data)
		},
	},
	Episode: {
		characters: async ({ characters }: any, _: null, { dataSources }: any): Promise<ICharacter[]> => {
			const data = await dataSources.character.getCharacter({ id: urlId(characters) })

			return checkArray(data)
		},
	},
}

export default resolvers
