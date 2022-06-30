import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export class CharacterService {
	getCharacters(): any {
		const characters = prisma.character.findMany({
			include: {
				location: true,
				episode: true,
			},
		})

		return characters
	}

	async getSingleByIds(ids: number[]): Promise<any> {
		const characters = prisma.character.findUnique({
			where: {},
		})

		return characters
	}

	async getSingle(id: number): Promise<any> {
		const character = prisma.character.findUnique({
			where: { id: Number(id) },
		})

		return character
	}

	async create(character: any): Promise<any> {
		const newCharacter = await prisma.character.create({
			data: { ...character },
		})

		return newCharacter
	}
}
