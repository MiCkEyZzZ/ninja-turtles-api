import { Character } from '@prisma/client'

export interface ICharacterRepository {
	getCharacters: () => Promise<Character[]>
	getCharacter: (id: number) => Promise<Character | null>
}
