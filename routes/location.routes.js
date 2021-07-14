import {Router} from 'express'
const router = Router()

import locationController from '../controllers/location.controller.js'

router.get('/', locationController.getAllLocation)

router.get('/:id', locationController.getOneLocation)

export default router