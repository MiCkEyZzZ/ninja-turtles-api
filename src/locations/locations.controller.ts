import { Request, Response, NextFunction } from 'express'
import { injectable, inject } from 'inversify'
import 'reflect-metadata'

import { TYPES } from '../types'
import { ILogger } from '../interfaces'
import { BaseController } from '../common/base.controller'
import { ILocationController } from './location.controller.interface'
import { LocationService } from './locations.service'
import { LocationDto } from './dtos/create-location.dto'

@injectable()
export class LocationsController extends BaseController implements ILocationController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.LocationService) private locationService: LocationService,
	) {
		super(loggerService)

		this.bindRoutes([
			{ path: '/', method: 'get', func: this.getAll },
			{ path: '/:id', method: 'get', func: this.getSingle },
		])
	}

	async getAll(req: Request<{}, {}, LocationDto>, res: Response, next: NextFunction): Promise<void> {
		const data = await this.locationService.getLocations()
		this.ok(res, data)
	}

	getSingle(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'get a single Location')
	}
}
