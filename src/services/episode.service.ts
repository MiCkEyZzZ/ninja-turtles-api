import { PrismaClient } from '@prisma/client'

/**
 * Класс EpisodeService, который позволяет
 * @class - EpisodeService
 * Метод, который позволяет получить всех эпизодов
 * @method getAll
 * Метод, который позволяет получить один эпизод
 * @method getOne
 * @param id - id: number
 */

const prisma = new PrismaClient()

class EpisodeService {
  async getAll() {
    const episodes = await prisma.episode.findMany({
      include: {
        characters: true
      }
    })

    return episodes
  }

  async getOne(id: number) {
    const episode = await prisma.episode.findUnique({
      where: { id: Number(id) }
    })

    return episode
  }

  async createOne(episode: any) {
    const newEpisode = await prisma.episode.create({
      data: {...episode}
    })

    return newEpisode
  }
}

export default new EpisodeService()
