import { Request, Response, NextFunction } from 'express'
import { injectable, inject } from 'inversify'
import 'reflect-metadata'

import { TYPES } from '../types'
import { ILogger } from '../interfaces'
import { BaseController } from '../common/base.controller'
import { ILocationController } from './location.controller.interface'
import { LocationDto } from './dtos/create-location.dto'
import { LocationService } from './locations.service'
import { HTTPError } from '../errors/http-error.class'

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

		res.status(200).json({
			info: {
				count: data.length,
			},
			data,
		})
	}

	async getSingle(req: Request, res: Response, next: NextFunction): Promise<void> {
		const { id } = req.params
		const data = await this.locationService.getLocation(Number(id))

		if (!data) {
			return next(new HTTPError(404, 'Местоположение с таким ID не найден'))
		}

		res.status(200).json({ ...data })
	}
}
