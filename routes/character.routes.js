import { Router } from 'express'
const router = Router()

import characterController from '../controllers/character.controller.js'

router.get('/', characterController.getAllCharacter)

router.get('/:id', characterController.getOneCharacter)

router.get('/avatar', characterController.getCharacterAvatar)

export default router