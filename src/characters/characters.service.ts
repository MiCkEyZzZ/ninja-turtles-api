import { inject, injectable } from 'inversify'
import { Character } from '@prisma/client'

import { CharacterDto } from './dtos/create-character.dto'
import { ICharacterService } from './character.service.interface'
import { CharacterEntity } from './character.entity'
import { TYPES } from '../types'
import { IConfigService } from '../config/config.service.interface'
import { ICharacterRepository } from './characters.repository.interface'

@injectable()
export class CharacterService implements ICharacterService {
	constructor(
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.CharactersRepository) private readonly charactersRepository: ICharacterRepository,
	) {}

	async getCharacters(): Promise<Character[]> {
		return await this.charactersRepository.getCharacters()
	}

	async getCharacter({ id }: CharacterDto): Promise<Character | null> {
		const character = new CharacterEntity(id)
		// проверяем, что пользователь с таким id существует в базе данных?
		// если пользователя нет, с таким id, то производим обработку ошибок
		const existedCharacter = await this.charactersRepository.getCharacter(character.id)

		if (!existedCharacter) {
			return null
		}

		// и если пользователь существует с таким id в базе данных, то возвращаем объект пользователя

		return existedCharacter
	}
}
