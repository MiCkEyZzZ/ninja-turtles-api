const EpisodeService = require('../services/episode.service')
const ApiError = require('../utils/api.error')

class EpisodeController {
    async getAllEpisode(req, res, next) {
        try {
            const episodes = await EpisodeService.getAllEpisode()

            res.status(200).json({
                status: 'success',
                results: episodes.length,
                data: {
                    episodes,
                },
            })
        } catch (err) {
            next(err)
        }
    }

    async getOneEpisode(req, res, next) {
        try {
            const { id } = req.params
            const episode = await EpisodeService.getOneEpisode(id)

            if (!episode) {
                return next(new ApiError(`Episode with this ID ${episode.id} not found`, 404))
            }

            res.status(200).json({
                status: 'success',
                data: {
                    episode,
                },
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new EpisodeController()
