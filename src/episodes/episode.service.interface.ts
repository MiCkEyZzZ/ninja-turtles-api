import { Episode } from '@prisma/client'

import { EpisodeDto } from './dtos/create-episode.dto'

export interface IEpisodeService {
	getEpisodes: (dto: EpisodeDto) => Promise<Episode[]>
	getEpisode: (dto: EpisodeDto) => Promise<Episode | null>
}
