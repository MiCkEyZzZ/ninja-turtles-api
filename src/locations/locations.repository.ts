import { inject, injectable } from 'inversify'
import { Location } from '@prisma/client'

import { ILocationRepository } from './locations.repository.interface'
import { PrismaService } from '../database/prisma.service'
import { TYPES } from '../types'

@injectable()
export class LocationsRepository implements ILocationRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async getLocations(): Promise<Location[]> {
		return await this.prismaService.client.location.findMany({
			include: {
				residents: true,
			},
		})
	}

	async getLocation(id: number): Promise<Location | null> {
		return await this.prismaService.client.location.findUnique({
			where: {
				id: Number(id),
			},
		})
	}
}
