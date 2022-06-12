import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import ApiError from './utils/api.error'
import morgan from 'morgan'
import globalErrorHandler from './middleware/errors.middleware'
import routes from './routes'

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/images`))

app.use('/api', routes)

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandler)

export default app
