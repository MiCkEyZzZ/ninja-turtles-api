import { Router } from 'express'

const router = Router()

import { createLocation, getAllLocations, getLocation } from '../controllers/location.controller'

router.post('/', createLocation)
router.get('/', getAllLocations)
router.get('/:id', getLocation)

export default router
