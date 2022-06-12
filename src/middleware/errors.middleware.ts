import ApiError from '../utils/api.error'
import { Request, Response, NextFunction } from 'express'

/**
 * Функция handleCastErrorDB служит для формирования ошибки
 * @function - handleCastErrorDB
 * @param err
 */

const handleCastErrorDB = (err: any) => {
  const message = `Invalid ${err.path}: ${err.value}`

  return new ApiError(message, 400)
}

/**
 *
 * @param err
 * @param res
 */

const sendErrorDevelopment = (err: any, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  })
}

/**
 *
 * @param err
 * @param res
 */

const sendErrorProduction = (err: any, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    })
  } else {
    console.error('ERROR', err)

    res.status(500).json({
      status: 'error',
      message: 'Something went wrong',
    })
  }
}

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  if (process.env.NODE_ENV === 'development') {
    sendErrorDevelopment(err, res)
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err }

    if (err.name === 'CastError') error = handleCastErrorDB(error)

    sendErrorProduction(error, res)
  }
}
