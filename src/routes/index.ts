import { Router, Request, Response } from 'express'

import characterRoutes from './character.routes'
import locationRoutes from './location.routes'
import episodeRoutes from './episode.routes'

import { baseUrl } from '../utils/common'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  res.json({
    characters: `${baseUrl}/character`,
    locations: `${baseUrl}/location`,
    episodes: `${baseUrl}/episode`,
  })
})

routes.use('/character', characterRoutes)
routes.use('/location', locationRoutes)
routes.use('/episode', episodeRoutes)

export default routes
