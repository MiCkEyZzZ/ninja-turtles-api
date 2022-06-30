import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class EpisodeService {
	getEpisodes(): any {
		const episodes = prisma.episode.findMany({
			include: {
				characters: true,
			},
		})

		return episodes
	}

	async getSingleById(ids: number[]): Promise<any> {
		const characters = prisma.character.findUnique({
			where: {
				ids: Number(ids),
			},
		})

		return characters
	}

	async getSingle(id: number): Promise<any> {
		const episode = prisma.character.findUnique({
			where: { id: Number(id) },
		})

		return episode
	}

	async create(episode: any): Promise<any> {
		const newEpisode = await prisma.character.create({
			data: { ...episode },
		})

		return newEpisode
	}
}
