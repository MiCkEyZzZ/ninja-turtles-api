import { Episode } from '@prisma/client'

export interface IEpisodeRepository {
	getEpisodes: () => Promise<Episode[]>
	getEpisode: (id: number) => Promise<Episode | null>
}
