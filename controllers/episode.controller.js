import EpisodeService from '../services/episode.service.js'
import apiError from '../errors/api.error.js'
import {message} from '../messages/message.js'

class EpisodeController {
    async getAllEpisode(req, res, next) {
        try {
            const episodes = await EpisodeService.getAllEpisode()
            res.status(200).json(episodes)
        } catch (error) {
            await next(apiError.internal(message.someWrong))
        }
    }

    async getOneEpisode(req, res, next) {
        try {
            const episode = await EpisodeService.getOneEpisode(req.params.id)
            res.status(200).json(episode)
        } catch (error) {
            await next(apiError.internal(message.someWrong))
        }
    }
}

export default new EpisodeController()