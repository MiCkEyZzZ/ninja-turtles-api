require('dotenv').config()

const path = require('path')
const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

const db = process.env.NODE_ENV === 'production' ? process.env.DATABASE : config.get('mongoUri')

app.use(cors())

const PORT = process.env.PORT || 8080

async function start () {
    try {
        await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

        app.listen(PORT, () => {
            console.log(
                '\x1b[34m%s\x1b[0m',
                `
              ${app.get('env').toUpperCase()}
              Rest      → http://localhost:${PORT}/api/
              GraphQL   → http://localhost:${PORT}
              Database  → ${mongoose.connection.host}/${mongoose.connection.name}
              `
            )
        })
    } catch (err) {
        console.log('Server error', err.message)
        process.exit(1)
    }
}

start()