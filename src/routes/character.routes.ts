import { Router } from 'express'

const router = Router()

import { createCharacter, getAllCharacters, getCharacter } from '../controllers/character.controller'

router.post('/', createCharacter)
router.get('/', getAllCharacters)
router.get('/:id', getCharacter)

export default router
