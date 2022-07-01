import { Episode } from '@prisma/client'

export interface IEpisodeRepository {
	findAll: () => Promise<Episode[]>
	findOne: (id: number) => Promise<Episode | null>
}
