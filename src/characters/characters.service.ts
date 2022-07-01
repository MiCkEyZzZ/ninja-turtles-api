import { injectable, inject } from 'inversify'
import { Character } from '@prisma/client'

import { TYPES } from '../types'
import { ICharacterService } from './character.service.interface'
import { IConfigService } from '../config/config.service.interface'
import { ICharacterRepository } from './characters.repository.interface'

@injectable()
export class CharacterService implements ICharacterService {
	constructor(
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.CharactersRepository) private readonly charactersRepository: ICharacterRepository,
	) {}

	async getCharacters(): Promise<Character[]> {
		return await this.charactersRepository.findAll()
	}

	async getCharacter(id: number): Promise<Character | null> {
		return this.charactersRepository.findOne(id)
	}
}
