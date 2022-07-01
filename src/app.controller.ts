import { Request, Response, NextFunction } from 'express'
import { injectable, inject } from 'inversify'
import 'reflect-metadata'

import { TYPES } from './types'
import { ILogger } from './interfaces'
import { IAppController } from './app.controller.interface'
import { BaseController } from './common/base.controller'
import { AppService } from './app.service'

@injectable()
export class AppController extends BaseController implements IAppController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.AppService) private appService: AppService,
	) {
		super(loggerService)

		this.bindRoutes([{ path: '/', method: 'get', func: this.getAll }])
	}

	async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
		return await this.appService.getEndpoints(res)
	}
}
