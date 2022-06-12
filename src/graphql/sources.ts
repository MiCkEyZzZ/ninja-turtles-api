import { RESTDataSource } from 'apollo-datasource-rest'
import { baseUrl, checkArray, createObjectData } from '../utils/common'

/**
 * Класс для создания экземпляра Character
 * @class Character - Character class
 * Класс для создания экземпляра Location
 * @class Location - Location class
 * Класс для создания экземпляра Episode
 * @class Episode - Episode class
 * Метод, который позволяет получить данные о персонаже
 * @method - getCharacters
 * @param filter
 * @param page
 * Метод, который позволяет получить данные о персонажах по массиву ids
 * @method - getCharactersByIds
 * @param ids
 * Метод, который позволяет получить данные о персонаже по id
 * @method - getCharacter
 * @param id
 * Метод, который позволяет получить данные о местонахождении
 * @method - getLocations
 * @param filter
 * @param page
 * Метод, который позволяет получить данные о местонахождении по массиву ids
 * @method - getLocationsByIds
 * @param ids
 * Метод, который позволяет получить данные о местонахождении по id
 * @method - getLocation
 * @param id
 * Метод, который позволяет получить данные об эпизодах
 * @method - getEpisodes
 * @param filter
 * @param page
 * Метод, который позволяет получить данные об эпизодах по массиву ids
 * @method - getEpisodesByIds
 * @param ids
 * Метод, который позволяет получить данные об эпизоде по id
 * @method - getEpisode
 * @param id
 */

class Character extends RESTDataSource {
  constructor() {
    super()

    // Sets the base URL for the REST API
    this.baseURL = `${baseUrl}/character`
  }

  // GET requests to the specified endpoint
  async getCharacters({ filter, page }: any) {
    return this.get('/', createObjectData({ ...filter, page }))
  }

  async getCharactersById({ ids }: any) {
    const data = await this.get(`/${ids}`)

    return checkArray(data)
  }

  async getCharacter({ id }: any) {
    return this.get(`/${id}`)
  }
}

class Location extends RESTDataSource {
  constructor() {
    super()

    // Sets the base URL for the REST API
    this.baseURL = `${baseUrl}/location`
  }

  // GET requests to the specified endpoint
  async getLocations({ filter, page }: any) {
    return this.get('/', createObjectData({ ...filter, page }))
  }

  async getLocationsById({ ids }: any) {
    const data = await this.get(`/${ids}`)

    return checkArray(data)
  }

  async getLocation({ id }: any) {
    return this.get(`/${id}`)
  }
}

class Episode extends RESTDataSource {
  constructor() {
    super()

    // Sets the base URL for the REST API
    this.baseURL = `${baseUrl}/episode`
  }

  // GET requests to the specified endpoint
  async getEpisodes({ filter, page }: any) {
    return this.get('/', createObjectData({ ...filter, page }))
  }

  async getEpisodesById({ ids }: any) {
    const data = await this.get(`/${ids}`)

    return checkArray(data)
  }

  async getEpisode({ id }: any) {
    return this.get(`/${id}`)
  }
}

export { Character, Location, Episode }
