const { Router } = require('express')
const router = Router()

const episodeController = require('../controllers/episode.controller')

router.get('/', episodeController.getAllEpisode)

router.get('/:id', episodeController.getOneEpisode)

module.exports = router
