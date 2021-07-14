import {Router} from 'express'
const router = Router()

import episodeController from '../controllers/episode.controller.js'

router.get('/', episodeController.getAllEpisode)

router.get('/:id', episodeController.getOneEpisode)

export default router