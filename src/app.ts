import express, { Express } from 'express'
import { Server } from 'http'
import { inject, injectable } from 'inversify'
import { json } from 'body-parser'
import 'reflect-metadata'

import { TYPES } from './types'
import { ILogger } from './interfaces'
import { CharacterController } from './characters/character.controller'
import { LocationController } from './locations/location.controller'
import { EpisodeController } from './episodes/episode.controller'
import { ExeptionFilter } from './errors/exeption.filter'

@injectable()
export class App {
	app: Express
	server: Server
	port: number

	constructor(
		@inject(TYPES.ILogger) private logger: ILogger,
		@inject(TYPES.CharacterController) private characterController: CharacterController,
		@inject(TYPES.LocationController) private locationController: LocationController,
		@inject(TYPES.EpisodeController) private episodeController: EpisodeController,
		@inject(TYPES.ExeptionFilter) private readonly exeptionFilter: ExeptionFilter,
	) {
		this.app = express()
		this.port = 8181
	}

	useMiddleware(): void {
		this.app.use(json())
	}

	useRoutes(): void {
		this.app.use('/api/character', this.characterController.router)
		this.app.use('/api/location', this.locationController.router)
		this.app.use('/api/episode', this.episodeController.router)
	}

	useExceptionFilters(): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
	}

	public async init(): Promise<void> {
		this.useMiddleware()
		this.useRoutes()
		this.useExceptionFilters()
		this.server = this.app.listen(this.port)
		this.logger.log(
			`
        🚀 Rest      http://localhost:${this.port}/api
        🚀 GraphQL   http://localhost:${this.port}/api
      `,
		)
	}
}
