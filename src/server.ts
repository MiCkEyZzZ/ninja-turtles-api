import { Container, ContainerModule, interfaces } from 'inversify'

import { App } from './app'
import { TYPES } from './types'
import { IBootStrapReturn, IExeptionFilter, ILogger } from './interfaces'
import { LoggerService } from './logger/logger.service'
import { CharacterController } from './characters/character.controller'
import { LocationController } from './locations/location.controller'
import { EpisodeController } from './episodes/episode.controller'
import { ExeptionFilter } from './errors/exeption.filter'

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService)
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter)
	bind<CharacterController>(TYPES.CharacterController).to(CharacterController)
	bind<LocationController>(TYPES.LocationController).to(LocationController)
	bind<EpisodeController>(TYPES.EpisodeController).to(EpisodeController)
	bind<App>(TYPES.Application).to(App)
})

function bootstrap(): IBootStrapReturn {
	const appContainer = new Container()
	appContainer.load(appBindings)
	const app = appContainer.get<App>(TYPES.Application)
	app.init()

	return { appContainer, app }
}

export const { app, appContainer } = bootstrap()
