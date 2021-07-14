import Location from '../models/location.js'

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

export default new LocationService()