import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class LocationService {
	getLocations(): any {
		const locations = prisma.location.findMany({
			include: {
				residents: true,
			},
		});

		return locations;
	}

	async getSingleById(ids: number[]): Promise<any> {
		const locations = prisma.location.findUnique({
			where: {},
		});

		return locations;
	}

	async getSingle(id: number): Promise<any> {
		const character = await prisma.location.findUnique({
			where: {
				id: Number(id),
			},
		});
	}

	async create(location: any): Promise<any> {
		const newLocation = await prisma.location.create({
			data: { ...location },
		});

		return newLocation;
	}
}
