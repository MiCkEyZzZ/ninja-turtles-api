const {Router} = require('express')
const Person = require('../models/person')
const router = Router()

const {message} = require('../helpers/index')

// /api/person
router.get('/person', async (req, res) => {
    try {

    } catch (error) {
        await res.status(500).json({error: message.wrong})
    }
})

// /api/person/:id
router.get('/person/:id', async (req, res) => {
    try {

    } catch (error) {
        await res.status(500).json({error: message.wrong})
    }
})

module.exports = router