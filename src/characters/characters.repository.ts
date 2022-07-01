import { injectable, inject } from 'inversify'
import { Character } from '@prisma/client'

import { TYPES } from '../types'
import { ICharacterRepository } from './characters.repository.interface'
import { PrismaService } from '../database/prisma.service'

@injectable()
export class CharactersRepository implements ICharacterRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async findAll(): Promise<Character[]> {
		return await this.prismaService.client.character.findMany({
			include: {
				location: true,
				episode: true,
			},
		})
	}

	async findOne(id: number): Promise<Character | null> {
		return this.prismaService.client.character.findUnique({
			where: {
				id: Number(id),
			},
		})
	}
}
