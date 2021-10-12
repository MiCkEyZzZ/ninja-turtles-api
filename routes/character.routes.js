const { Router } = require('express')
const router = Router()

const characterController = require('../controllers/character.controller')

router.get('/', characterController.getAllCharacter)

router.get('/:id', characterController.getOneCharacter)

router.get('/avatar', characterController.getCharacterAvatar)

module.exports = router
