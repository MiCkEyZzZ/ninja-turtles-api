const express = require('express')
const app = express()

const cors = require('cors')
const morgan = require('morgan')
const ApiError = require('./utils/api.error')
const globalErrorHandler = require('./middleware/errors.middleware')
const router = require('./routes/index')

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(cors())
app.use(express.static(`${ __dirname }/images`))

app.use('/api/v1', router)

app.all('*', (req, res, next) => {
    next(new ApiError(`Can't find ${ req.originalUrl } on this server`, 404))
})

app.use(globalErrorHandler)

module.exports = app
