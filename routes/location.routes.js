const { Router } = require('express')
const router = Router()

const locationController = require('../controllers/location.controller')

router.get('/', locationController.getAllLocation)

router.get('/:id', locationController.getOneLocation)

module.exports = router
