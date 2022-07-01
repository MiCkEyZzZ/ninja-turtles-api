import { injectable, inject } from 'inversify'
import { Location } from '@prisma/client'

import { TYPES } from '../types'
import { ILocationService } from './location.service.interface'
import { IConfigService } from '../config/config.service.interface'
import { ILocationRepository } from './locations.repository.interface'

@injectable()
export class LocationService implements ILocationService {
	constructor(
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.LocationsRepository) private readonly locationsRepository: ILocationRepository,
	) {}

	async getLocations(): Promise<Location[]> {
		return await this.locationsRepository.findAll()
	}

	async getLocation(id: number): Promise<Location | null> {
		return await this.locationsRepository.findOne(id)
	}
}
