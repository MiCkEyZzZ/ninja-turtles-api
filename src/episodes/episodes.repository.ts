import { injectable, inject } from 'inversify'
import { Episode } from '@prisma/client'

import { TYPES } from '../types'
import { IEpisodeRepository } from './episodes.repository.interface'
import { PrismaService } from '../database/prisma.service'

@injectable()
export class EpisodesRepository implements IEpisodeRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async findAll(): Promise<Episode[]> {
		return await this.prismaService.client.episode.findMany({
			include: {
				characters: true,
			},
		})
	}

	async findOne(id: number): Promise<Episode | null> {
		return await this.prismaService.client.episode.findUnique({
			where: {
				id: Number(id),
			},
		})
	}
}
