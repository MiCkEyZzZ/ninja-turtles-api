import { Location } from '@prisma/client'

import { LocationDto } from './dtos/create-location.dto'

export interface ILocationService {
	getLocations: (dto: LocationDto) => Promise<Location[]>
	getLocation: (id: number) => Promise<Location | null>
}
