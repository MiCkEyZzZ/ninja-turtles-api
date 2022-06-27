import { Request, Response, NextFunction } from 'express'
import { inject, injectable } from 'inversify'
import 'reflect-metadata'

import { TYPES } from '../types'
import { ICharacterController, ILogger } from '../interfaces'
import { BaseController } from '../common/base.controller'
import { CreateCharacterDto } from './dtos/create-character.dto'

@injectable()
export class CharacterController extends BaseController implements ICharacterController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService)

		this.bindRoutes([
			{ path: '/', method: 'get', func: this.getAll },
			{ path: '/:id', method: 'get', func: this.getSingle },
			{ path: '/', method: 'post', func: this.createSingle },
		])
	}

	getAll(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'get all Characters')
	}

	getSingle(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'get a single Character')
	}

	async createSingle(req: Request<{}, {}, CreateCharacterDto>, res: Response, next: NextFunction): Promise<void> {
		console.log(req.body)
		this.ok(res, 'created a single Character')
	}
}
