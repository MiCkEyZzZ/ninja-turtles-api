import { Character } from '@prisma/client'

import { CharacterDto } from './dtos/create-character.dto'

export interface ICharacterService {
	getCharacters: (dto: CharacterDto) => Promise<Character[] | null>
	getCharacter: (dto: CharacterDto) => Promise<Character | null>
}
