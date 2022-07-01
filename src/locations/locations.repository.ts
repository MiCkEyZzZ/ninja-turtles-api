import { injectable, inject } from 'inversify'
import { Location } from '@prisma/client'

import { TYPES } from '../types'
import { ILocationRepository } from './locations.repository.interface'
import { PrismaService } from '../database/prisma.service'

@injectable()
export class LocationsRepository implements ILocationRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async findAll(): Promise<Location[]> {
		return await this.prismaService.client.location.findMany({
			include: {
				residents: true,
			},
		})
	}

	async findOne(id: number): Promise<Location | null> {
		return await this.prismaService.client.location.findUnique({
			where: {
				id: Number(id),
			},
		})
	}
}
