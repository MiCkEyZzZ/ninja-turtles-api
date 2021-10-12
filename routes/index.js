const { Router } = require('express')
const router = Router()

const characterRoutes = require('./character.routes')
const locationRoutes = require('./location.routes')
const episodeRoutes = require('./episode.routes')

router.use('/character', characterRoutes)
router.use('/location', locationRoutes)
router.use('/episode', episodeRoutes)

module.exports = router
