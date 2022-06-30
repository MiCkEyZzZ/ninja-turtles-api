import { inject, injectable } from 'inversify'
import { Location } from '@prisma/client'

import { LocationDto } from './dtos/create-location.dto'
import { ILocationService } from './location.service.interface'
import { LocationEntity } from './location.entity'
import { TYPES } from '../types'
import { IConfigService } from '../config/config.service.interface'
import { ILocationRepository } from './locations.repository.interface'

@injectable()
export class LocationService implements ILocationService {
	constructor(
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.LocationsRepository) private readonly locationsRepository: ILocationRepository,
	) {}

	async getLocations(): Promise<Location[]> {
		return await this.locationsRepository.getLocations()
	}

	async getLocation({ id }: LocationDto): Promise<Location | null> {
		const location = new LocationEntity(id)
		// проверяем, что местоположение с таким id существует в базе данных
		// если местоположения нет, с таким id, то производим обработку ошибок
		const existedLocation = await this.locationsRepository.getLocation(location.id)

		if (!existedLocation) {
			return null
		}

		// и если местоположение существует с таким id в базе данных, то возвращаем объект местоположения

		return existedLocation
	}
}
