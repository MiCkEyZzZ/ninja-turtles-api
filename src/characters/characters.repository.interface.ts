import { Character } from '@prisma/client'

export interface ICharacterRepository {
	findAll: () => Promise<Character[]>
	findOne: (id: number) => Promise<Character | null>
}
