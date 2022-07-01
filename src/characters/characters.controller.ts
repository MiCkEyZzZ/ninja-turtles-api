import { Request, Response, NextFunction } from 'express'
import { injectable, inject } from 'inversify'
import 'reflect-metadata'

import { TYPES } from '../types'
import { ILogger } from '../interfaces'
import { BaseController } from '../common/base.controller'
import { ICharacterController } from './character.controller.interface'
import { CharacterDto } from './dtos/create-character.dto'
import { CharacterService } from './characters.service'
import { HTTPError } from '../errors/http-error.class'

@injectable()
export class CharactersController extends BaseController implements ICharacterController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.CharacterService) private characterService: CharacterService,
	) {
		super(loggerService)

		this.bindRoutes([
			{ path: '/', method: 'get', func: this.getAll },
			{ path: '/:id', method: 'get', func: this.getSingle },
		])
	}

	async getAll(req: Request<{}, {}, CharacterDto>, res: Response, next: NextFunction): Promise<void> {
		const data = await this.characterService.getCharacters()

		res.status(200).json({
			info: {
				count: data.length,
			},
			data,
		})
	}

	async getSingle(req: Request, res: Response, next: NextFunction): Promise<void> {
		const { id } = req.params
		const data = await this.characterService.getCharacter(Number(id))

		if (!data) {
			return next(new HTTPError(404, 'Пользователь с таким ID не найден'))
		}

		res.status(200).json({ ...data })
	}
}
