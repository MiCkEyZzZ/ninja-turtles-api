import { Response } from 'express'

export interface IAppService {
	getEndpoints: (res: Response) => Promise<void>
}
