import { Location } from '@prisma/client'

export interface ILocationRepository {
	getLocations: () => Promise<Location[]>
	getLocation: (id: number) => Promise<Location | null>
}
