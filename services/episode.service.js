const Episode = require('../models/episode.model')

class EpisodeService {
    async getAllEpisode() {
        const episodes = await Episode.find()

        return episodes
    }

    async getOneEpisode(id) {
        const episode = await Episode.findById(id)

        return episode
    }
}

module.exports = new EpisodeService()
