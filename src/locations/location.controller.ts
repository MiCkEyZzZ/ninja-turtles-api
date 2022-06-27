import { Request, Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import 'reflect-metadata'

import { TYPES } from '../types'
import { ILocationController, ILogger } from '../interfaces'
import { BaseController } from '../common/base.controller'
import { CreateLocationDto } from './dtos/create-location.dto'

@injectable()
export class LocationController extends BaseController implements ILocationController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService)

		this.bindRoutes([
			{ path: '/', method: 'get', func: this.getAll },
			{ path: '/:id', method: 'get', func: this.getSingle },
			{ path: '/', method: 'post', func: this.createSingle },
		])
	}

	getAll(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'get all Locations')
	}

	getSingle(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'get a single Location')
	}

	async createSingle(req: Request<{}, {}, CreateLocationDto>, res: Response, next: NextFunction): Promise<void> {
		console.log(req.body)
		this.ok(res, 'created a single Location')
	}
}
