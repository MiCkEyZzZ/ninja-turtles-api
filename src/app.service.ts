import { Response } from 'express'
import { injectable } from 'inversify'

import { IAppService } from './app.service.interface'
import { baseUrl } from './utils'

@injectable()
export class AppService implements IAppService {
	async getEndpoints(res: Response): Promise<void> {
		res.json({
			characters: `${baseUrl}/character`,
			locations: `${baseUrl}/location`,
			episodes: `${baseUrl}/episode`,
		})
	}
}
