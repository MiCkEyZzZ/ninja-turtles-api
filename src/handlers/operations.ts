import { Request, Response, NextFunction } from 'express'
import ApiFeatures from '../utils/api.features'
import ApiError from '../utils/api.error'

/**
 * Класс является абстракцией для формирования общих методов во вновь
 * создаваемого образца
 * @class - класс OperationsFactory
 * Метод, который выполняет запрос для получения всех объектов
 * @method - метод getAll
 * @param Service - {any} Service параметр является сервисом, который совершает
 * обращение к базе данных
 * Метод, который выполняет запрос для получения одного запроса
 * @method - метод getOne
 * @param Service - {any} Service параметр является сервисом, который совершает
 * обращение к базе данных
 */

class OperationsFactory {
  getAll(Service: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        let filter = {}
        // const features = new ApiFeatures(Service.getAll(filter), req.query)
        //   .pagination()

        const doc = await Service.getAll(filter)

        res.status(200).json({
          info: {
            count: doc.length,
            pages: '',
            next: '',
            prev: '',
          },
          results: [...doc],
        })
      } catch (err) {
        next(err)
      }
    }
  }

  getOne(Service: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params
        const doc = await Service.getOne(id)

        if (!doc) {
          return next(
            new ApiError(`Document with this ID ${doc.id} not found`, 404)
          )
        }

        res.status(200).json({
          doc
        })
      } catch (err) {
        next(err)
      }
    }
  }

  createOne(Service: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const doc = await Service.createOne(req.body)

        res.status(200).json({
          doc
        })
      } catch (err) {
        next(err)
      }
    }
  }
}

export default new OperationsFactory()
