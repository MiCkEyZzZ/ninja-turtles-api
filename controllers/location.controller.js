import LocationService from '../services/location.service.js'
import apiError from '../errors/api.error.js'
import {message} from '../messages/message.js'

class LocationController {
    async getAllLocation(req, res, next) {
        try {
            const locations = await LocationService.getAllLocation()
            res.status(200).json(locations)
        } catch (error) {
            await next(apiError.internal(message.someWrong))
        }
    }

    async getOneLocation(req, res, next) {
        try {
            const location = await LocationService.getOneLocation(req.params.id)
            res.status(200).json(location)
        } catch (error) {
            await next(apiError.internal(message.someWrong))
        }
    }
}

export default new LocationController()