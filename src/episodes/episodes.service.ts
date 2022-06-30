import { inject, injectable } from 'inversify'
import { Episode } from '@prisma/client'

import { EpisodeDto } from './dtos/create-episode.dto'
import { IEpisodeService } from './episode.service.interface'
import { EpisodeEntity } from './episode.entity'
import { TYPES } from '../types'
import { IConfigService } from '../config/config.service.interface'
import { IEpisodeRepository } from './episodes.repository.interface'

@injectable()
export class EpisodeService implements IEpisodeService {
	constructor(
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.EpisodesRepository) private readonly episodesRepository: IEpisodeRepository,
	) {}

	async getEpisodes(): Promise<Episode[]> {
		return await this.episodesRepository.getEpisodes()
	}

	async getEpisode({ id }: EpisodeDto): Promise<Episode | null> {
		const episode = new EpisodeEntity(id)
		const existedEpisode = await this.episodesRepository.getEpisode(episode.id)

		if (!existedEpisode) {
			return null
		}

		return existedEpisode
	}
}
