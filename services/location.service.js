const Location = require('../models/location.model')

class LocationService {
    async getAllLocation() {
        const locations = await Location.find()

        return locations
    }

    async getOneLocation(id) {
        const location = await Location.findById(id)

        return location
    }
}

module.exports = new LocationService()
