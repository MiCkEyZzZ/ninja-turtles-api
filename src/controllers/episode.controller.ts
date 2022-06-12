import EpisodeService from '../services/episode.service'
import operationsFactory from '../handlers/operations'

/**
 * Класс EpisodeController является контроллером для управления
 * @class - класс EpisodeController
 * Метод getAllEpisodes
 * @method getAllEpisodes
 * Метод getOneEpisode
 * @method getOneEpisode
 */

export const getAllEpisodes = operationsFactory.getAll(EpisodeService)

export const getOneEpisode = operationsFactory.getOne(EpisodeService)

export const createEpisode = operationsFactory.createOne(EpisodeService)
