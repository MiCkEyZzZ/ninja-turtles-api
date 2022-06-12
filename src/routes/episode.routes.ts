import { Router } from 'express'

const router = Router()

import { createEpisode, getAllEpisodes, getOneEpisode } from '../controllers/episode.controller'

router.post('/', createEpisode)
router.get('/', getAllEpisodes)
router.get('/:id', getOneEpisode)

export default router
