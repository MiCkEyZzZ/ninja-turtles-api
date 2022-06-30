import { inject, injectable } from 'inversify'
import { Character } from '@prisma/client'

import { ICharacterRepository } from './characters.repository.interface'
import { PrismaService } from '../database/prisma.service'
import { TYPES } from '../types'

@injectable()
export class CharactersRepository implements ICharacterRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async getCharacters(): Promise<Character[]> {
		return await this.prismaService.client.character.findMany({
			include: {
				location: true,
				episode: true,
			},
		})
	}

	async getCharacter(id: number): Promise<Character | null> {
		return await this.prismaService.client.character.findUnique({
			where: {
				id: Number(id),
			},
		})
	}
}
