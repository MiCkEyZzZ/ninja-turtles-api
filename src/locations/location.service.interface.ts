import { Location } from '@prisma/client'

import { LocationDto } from './dtos/create-location.dto'

export interface ILocationService {
	getLocations: (dto: LocationDto) => Promise<Location[]>
	getLocation: (dto: LocationDto) => Promise<Location | null>
}
