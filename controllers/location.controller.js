const LocationService = require('../services/location.service')
const ApiError = require('../utils/api.error')

class LocationController {
    async getAllLocation(req, res, next) {
        try {
            const locations = await LocationService.getAllLocation()

            res.status(200).json({
                status: 'success',
                results: locations.length,
                data: {
                    locations
                }
            })
        } catch (err) {
            next(err)
        }
    }

    async getOneLocation(req, res, next) {
        try {
            const { id } = req.params
            const location = await LocationService.getOneLocation(id)

            if (!location) {
                return next(new ApiError(`Location with this ID ${ location.id } not found`, 404))
            }

            res.status(200).json({
                status: 'success',
                data: {
                    location
                }
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new LocationController()
