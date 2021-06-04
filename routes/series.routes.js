const {Router} = require('express')
const Series = require('../models/series')
const router = Router()

const {message} = require('../helpers/index')

// /api/series
router.get('/series', async (req, res) => {
    try {

    } catch (error) {
        await res.status(500).json({error: message.wrong})
    }
})

// /api/series/:id
router.get('/series/:id', async (req, res) => {
    try {

    } catch (error) {
        await res.status(500).json({error: message.wrong})
    }
})

module.exports = router