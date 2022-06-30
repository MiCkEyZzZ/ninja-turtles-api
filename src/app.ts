import express, { Express } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { Server } from 'http'
import { inject, injectable } from 'inversify'
import { json } from 'body-parser'
import 'reflect-metadata'

import { TYPES } from './types'
import { ILogger } from './interfaces'
import { CharactersController } from './characters/characters.controller'
import { LocationsController } from './locations/locations.controller'
import { EpisodesController } from './episodes/episodes.controller'
import { ExeptionFilter } from './errors/exeption.filter'
import typeDefs from '../graphql/typeDefs'
import resolvers from '../graphql/resolvers'
import { Character, Episode, Location } from '../graphql/sources'
import { IConfigService } from './config/config.service.interface'
import { PrismaService } from './database/prisma.service'

@injectable()
export class App {
	app: Express
	server: Server
	port: number
	apollo: ApolloServer

	constructor(
		@inject(TYPES.ILogger) private logger: ILogger,
		@inject(TYPES.CharacterController) private characterController: CharactersController,
		@inject(TYPES.LocationController) private locationController: LocationsController,
		@inject(TYPES.EpisodeController) private episodeController: EpisodesController,
		@inject(TYPES.ExeptionFilter) private readonly exeptionFilter: ExeptionFilter,
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.PrismaService) private readonly prismaService: PrismaService,
	) {
		this.app = express()
		this.port = this.configService.get<number>('PORT')
		this.apollo = new ApolloServer({
			typeDefs,
			resolvers,
			introspection: true,
			playground: true,
			dataSources: () => ({
				character: new Character(),
				location: new Location(),
				episode: new Episode(),
			}),
		})
	}

	useMiddleware(): void {
		this.app.use(json())
	}

	useRoutes(): void {
		this.app.use('/api/character', this.characterController.router)
		this.app.use('/api/location', this.locationController.router)
		this.app.use('/api/episode', this.episodeController.router)
	}

	useApolloService(): void {
		const app = this.app
		this.apollo.applyMiddleware({ app })
	}

	useExceptionFilters(): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
	}

	public async init(): Promise<void> {
		this.useMiddleware()
		this.useRoutes()
		this.useExceptionFilters()
		await this.prismaService.connect()
		this.useApolloService()
		this.server = this.app.listen(this.port)
		this.logger.log(
			`
        🚀 Rest      http://localhost:${this.port}/api
        🚀 GraphQL   http://localhost:${this.port}${this.apollo.graphqlPath}/api
      `,
		)
	}
}
