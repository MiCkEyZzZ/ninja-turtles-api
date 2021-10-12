const ApiError = require('../utils/api.error')

const handleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`

    return new ApiError(message, 400)
}

const sendErrorDevelopment = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    })
}

const sendErrorProduction = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })
    } else {
        console.error('ERROR', err)

        res.status(500).json({
            status: 'error',
            message: 'Something went wrong'
        })
    }
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    if (process.env.NODE_ENV === 'development') {
        sendErrorDevelopment(err, res)
    } else if (process.env.NODE_ENV === 'production') {
        let error = {...err}

        if (err.name === 'CastError') error = handleCastErrorDB(error)

        sendErrorProduction(error, res)
    }
}
