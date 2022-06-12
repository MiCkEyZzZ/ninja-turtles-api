import LocationService from '../services/location.service'
import operationsFactory from '../handlers/operations'

/**
 * Класс LocationController является контроллером для управления
 * @class - класс LocationController
 * Метод getAllLocations
 * @method getAllLocations
 * Метод getOneLocation
 * @method getOneLocation
 */

export const getAllLocations = operationsFactory.getAll(LocationService)

export const getLocation = operationsFactory.getOne(LocationService)

export const createLocation = operationsFactory.createOne(LocationService)
