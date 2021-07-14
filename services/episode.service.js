import Episode from '../models/episode.js'

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

export default new EpisodeService()