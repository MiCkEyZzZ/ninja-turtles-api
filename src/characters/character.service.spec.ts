import 'reflect-metadata'
import { Container } from 'inversify'

import { TYPES } from '../types'
import { IConfigService } from '../config/config.service.interface'
import { ICharacterRepository } from './characters.repository.interface'
import { ICharacterService } from './character.service.interface'
import { CharacterService } from './characters.service'
import { CharacterEntity } from './character.entity'

const ConfigServiceMock: IConfigService = {
	get: jest.fn(),
}

const CharactersRepositoryMock: ICharacterRepository = {
	findAll: jest.fn(),
	findOne: jest.fn(),
}

const container = new Container()
let configService: IConfigService
let charactersRepository: ICharacterRepository
let charactersService: ICharacterService

beforeAll(() => {
	container.bind<ICharacterService>(TYPES.CharacterService).to(CharacterService)
	container.bind<IConfigService>(TYPES.ConfigService).toConstantValue(ConfigServiceMock)
	container.bind<ICharacterRepository>(TYPES.CharactersRepository).toConstantValue(CharactersRepositoryMock)

	configService = container.get<IConfigService>(TYPES.ConfigService)
	charactersRepository = container.get<ICharacterRepository>(TYPES.CharactersRepository)
	charactersService = container.get<ICharacterService>(TYPES.CharacterService)
})

describe('Character Service', () => {
	it('get character', async () => {
		configService.get = jest.fn().mockReturnValueOnce(1)
		charactersRepository.findOne = jest.fn().mockImplementationOnce((character: CharacterEntity) => ({
			id: character,
		}))

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const getCharacter = await charactersService.getCharacter(1)
		expect(getCharacter?.id).toEqual(1)
		expect(getCharacter?.id).not.toEqual('1')
	})
})
