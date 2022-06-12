import { PrismaClient } from '@prisma/client'

/**
 * Класс CharacterService, который осуществляет
 * @class - класс CharacterService
 * Метод, который позволяет получить всех персонажей
 * @method getAll
 * Метод, который позволяет получить одного персонажа
 * @method getOne
 * @param id - id: number
 */

const prisma = new PrismaClient()

class CharacterService {
  getAll() {
    const characters = prisma.character.findMany({
      include: {
        location: true,
        episode: true
      }
    })

    return characters
  }

  async getOne(id: number) {
    const character = await prisma.character.findUnique({
      where: { id: Number(id) }
    })

    return character
  }

  async createOne(character: any) {
    const newCharacter = await prisma.character.create({
      data: {...character}
    })

    return newCharacter
  }
}

export default new CharacterService()
