import { PrismaClient } from '@prisma/client'

/**
 * Класс LocationService, который позволяет
 * @class - класс LocationService
 * Метод, который позволяет получить список всех местоположений
 * @method getAll
 * Метод, который позволяет получить одно местоположение
 * @method getOne
 * @param id - id: number
 */

const prisma = new PrismaClient()

class LocationService {
  async getAll() {
    const locations = await prisma.location.findMany({
      include: {
        residents: true
      }
    })

    return locations
  }

  async getOne(id: number) {
    const location = await prisma.location.findUnique({
      where: { id: Number(id) },
    })

    return location
  }

  async createOne(location: any) {
    const newLocation = await prisma.location.create({
      data: {...location}
    })

    return newLocation
  }
}

export default new LocationService()
