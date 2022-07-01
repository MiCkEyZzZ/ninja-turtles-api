import { Location } from '@prisma/client'

export interface ILocationRepository {
	findAll: () => Promise<Location[]>
	findOne: (id: number) => Promise<Location | null>
}
