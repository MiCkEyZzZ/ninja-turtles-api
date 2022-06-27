import { Request, Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import 'reflect-metadata'

import { TYPES } from '../types'
import { IEpisodeController, ILogger } from '../interfaces'
import { BaseController } from '../common/base.controller'
import { CreateEpisodeDto } from './dtos/create-episode.dto'

@injectable()
export class EpisodeController extends BaseController implements IEpisodeController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService)

		this.bindRoutes([
			{ path: '/', method: 'get', func: this.getAll },
			{ path: '/:id', method: 'get', func: this.getSingle },
			{ path: '/', method: 'post', func: this.createSingle },
		])
	}

	getAll(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'get all Episodes')
	}

	getSingle(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'get a single Episode')
	}

	async createSingle(req: Request<{}, {}, CreateEpisodeDto>, res: Response, next: NextFunction): Promise<void> {
		console.log(req.body)
		this.ok(res, 'created a single Episode')
	}
}
