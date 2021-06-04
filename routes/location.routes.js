const {Router} = require('express')
const Location = require('../models/location')
const router = Router()

const {message} = require('../helpers/index')

// /api/location
router.get('/location', async (req, res) => {
    try {

    } catch (error) {
        await res.status(500).json({error: message.wrong})
    }
})

// /api/location/:id
router.get('/location/:id', async (req, res) => {
    try {

    } catch (error) {
        await res.status(500).json({error: message.wrong})
    }
})

module.exports = router