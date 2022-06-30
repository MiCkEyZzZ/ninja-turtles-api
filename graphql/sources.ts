import { RESTDataSource } from 'apollo-datasource-rest'
import { baseUrl, checkArray, createObjectData } from '../src/utils'
import { ICharacter, IEpisode, ILocation } from '../src/interfaces'

class Character extends RESTDataSource {
	constructor() {
		super()

		this.baseURL = `${baseUrl}/character`
	}

	async getCharacters({ filter, page }: any): Promise<ICharacter[]> {
		return this.get('/', createObjectData({ ...filter, page }))
	}

	async getCharactersById({ ids }: any): Promise<ICharacter[]> {
		const data = await this.get(`/${ids}`)

		return checkArray(data)
	}

	async getCharacter({ id }: any): Promise<ICharacter> {
		return this.get(`/${id}`)
	}
}

class Location extends RESTDataSource {
	constructor() {
		super()

		this.baseURL = `${baseUrl}/location`
	}

	async getLocations({ filter, page }: any): Promise<ILocation> {
		return this.get('/', createObjectData({ ...filter, page }))
	}

	async getLocationsById({ ids }: any): Promise<ILocation[]> {
		const data = await this.get(`/${ids}`)

		return checkArray(data)
	}

	async getLocation({ id }: any): Promise<ILocation> {
		return this.get(`/${id}`)
	}
}

class Episode extends RESTDataSource {
	constructor() {
		super()

		this.baseURL = `${baseUrl}/episode`
	}

	async getEpisodes({ filter, page }: any): Promise<IEpisode> {
		return this.get('/', createObjectData({ ...filter, page }))
	}

	async getEpisodesById({ ids }: any): Promise<IEpisode[]> {
		const data = await this.get(`/${ids}`)

		return checkArray(data)
	}

	async getEpisode({ id }: any): Promise<IEpisode> {
		return this.get(`/${id}`)
	}
}

export { Character, Location, Episode }
