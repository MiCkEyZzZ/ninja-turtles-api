import { inject, injectable } from 'inversify'
import { Episode } from '@prisma/client'

import { IEpisodeRepository } from './episodes.repository.interface'
import { PrismaService } from '../database/prisma.service'
import { TYPES } from '../types'

@injectable()
export class EpisodesRepository implements IEpisodeRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async getEpisodes(): Promise<Episode[]> {
		return await this.prismaService.client.episode.findMany({
			include: {
				characters: true,
			},
		})
	}

	async getEpisode(id: number): Promise<Episode | null> {
		return await this.prismaService.client.episode.findUnique({
			where: {
				id: Number(id),
			},
		})
	}
}
