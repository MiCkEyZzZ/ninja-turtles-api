import { Request, Response, NextFunction } from 'express'
import { injectable, inject } from 'inversify'
import 'reflect-metadata'

import { TYPES } from '../types'
import { ILogger } from '../interfaces'
import { BaseController } from '../common/base.controller'
import { IEpisodeController } from './episode.controller.interface'
import { EpisodeService } from './episodes.service'
import { EpisodeDto } from './dtos/create-episode.dto'

@injectable()
export class EpisodesController extends BaseController implements IEpisodeController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.EpisodeService) private episodeService: EpisodeService,
	) {
		super(loggerService)

		this.bindRoutes([
			{ path: '/', method: 'get', func: this.getAll },
			{ path: '/:id', method: 'get', func: this.getSingle },
		])
	}

	async getAll(req: Request<{}, {}, EpisodeDto>, res: Response, next: NextFunction): Promise<void> {
		const data = await this.episodeService.getEpisodes()
		this.ok(res, data)
	}

	async getSingle(req: Request, res: Response, next: NextFunction): Promise<void> {
		this.ok(res, 'get a single Episode')
	}
}
