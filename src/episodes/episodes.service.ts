import { injectable, inject } from 'inversify'
import { Episode } from '@prisma/client'

import { TYPES } from '../types'
import { IEpisodeService } from './episode.service.interface'
import { IConfigService } from '../config/config.service.interface'
import { IEpisodeRepository } from './episodes.repository.interface'

@injectable()
export class EpisodeService implements IEpisodeService {
	constructor(
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.EpisodesRepository) private readonly episodesRepository: IEpisodeRepository,
	) {}

	async getEpisodes(): Promise<Episode[]> {
		return await this.episodesRepository.findAll()
	}

	async getEpisode(id: number): Promise<Episode | null> {
		return await this.episodesRepository.findOne(id)
	}
}
