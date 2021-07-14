import {Router} from 'express'
const router = Router()

import characterRoutes from './character.routes.js'
import locationRoutes from './location.routes.js'
import episodeRoutes from './episode.routes.js'

router.use('/character', characterRoutes)
router.use('/location', locationRoutes)
router.use('/episode', episodeRoutes)

export default router