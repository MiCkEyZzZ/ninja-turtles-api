const { RESTDataSource } = require('apollo-datasource-rest')
const { baseUrl, createObject } = require('../utils/common')

class Character extends RESTDataSource {
    constructor() {
        super()

        this.baseURL = `${baseUrl}/character`
    }

    async getCharacters({filter, page}) {
        return this.get('/', createObject({...filter, page}))
    }

    async getCharacterByIds({ids}) {
        const data = await this.get('/' + ids)

        return Array.isArray(data) ? data : [data]
    }

    async getCharacter({id}) {
        return this.get('/' + id)
    }
}

class Location extends RESTDataSource {
    constructor() {
        super()

        this.baseURL = `${baseUrl}/location`
    }

    async getLocations({filter, page}) {
        return this.get('/', createObject({...filter, page}))
    }

    async getLocationByIds({ids}) {
        const data = await this.get('/' + ids)

        return Array.isArray(data) ? data : [data]
    }

    async getLocation({id}) {
        return this.get('/' + id)
    }
}

class Episode extends RESTDataSource {
    constructor() {
        super()

        this.baseURL = `${baseUrl}/episode`
    }

    async getEpisodes({filter, page}) {
        return this.get('/', createObject({...filter, page}))
    }

    async getEpisodeByIds({ids}) {
        const data = await this.get('/' + ids)

        return Array.isArray(data) ? data : [data]
    }

    async getEpisode({id}) {
        return this.get('/' + id)
    }
}

module.exports = { Character, Location, Episode }
