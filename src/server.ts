import { Container, ContainerModule, interfaces } from 'inversify'

import { App } from './app'
import { TYPES } from './types'
import { IBootStrapReturn, IExeptionFilter, ILogger } from './interfaces'
import { LoggerService } from './logger/logger.service'
import { CharactersController } from './characters/characters.controller'
import { LocationsController } from './locations/locations.controller'
import { EpisodesController } from './episodes/episodes.controller'
import { ExeptionFilter } from './errors/exeption.filter'
import { CharacterService } from './characters/characters.service'
import { LocationService } from './locations/locations.service'
import { EpisodeService } from './episodes/episodes.service'
import { ICharacterService } from './characters/character.service.interface'
import { ILocationService } from './locations/location.service.interface'
import { IEpisodeService } from './episodes/episode.service.interface'
import { ICharacterController } from './characters/character.controller.interface'
import { ILocationController } from './locations/location.controller.interface'
import { IEpisodeController } from './episodes/episode.controller.interface'
import { IConfigService } from './config/config.service.interface'
import { ConfigService } from './config/config.service'
import { PrismaService } from './database/prisma.service'
import { CharactersRepository } from './characters/characters.repository'
import { ICharacterRepository } from './characters/characters.repository.interface'
import { LocationsRepository } from './locations/locations.repository'
import { ILocationRepository } from './locations/locations.repository.interface'
import { IEpisodeRepository } from './episodes/episodes.repository.interface'
import { EpisodesRepository } from './episodes/episodes.repository'

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope()
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter)
	bind<ICharacterController>(TYPES.CharacterController).to(CharactersController)
	bind<ILocationController>(TYPES.LocationController).to(LocationsController)
	bind<IEpisodeController>(TYPES.EpisodeController).to(EpisodesController)
	bind<ICharacterService>(TYPES.CharacterService).to(CharacterService)
	bind<ILocationService>(TYPES.LocationService).to(LocationService)
	bind<IEpisodeService>(TYPES.EpisodeService).to(EpisodeService)
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope()
	bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope()
	bind<ICharacterRepository>(TYPES.CharactersRepository).to(CharactersRepository).inSingletonScope()
	bind<ILocationRepository>(TYPES.LocationsRepository).to(LocationsRepository).inSingletonScope()
	bind<IEpisodeRepository>(TYPES.EpisodesRepository).to(EpisodesRepository).inSingletonScope()
	bind<App>(TYPES.Application).to(App)
})

function bootstrap(): IBootStrapReturn {
	const appContainer = new Container()
	appContainer.load(appBindings)
	const app = appContainer.get<App>(TYPES.Application)
	app.init()

	return { appContainer, app, server }
}

export const { app, appContainer, server } = bootstrap()
