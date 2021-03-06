import { Request, Response, NextFunction } from 'express'

export interface IAppController {
	getAll: (req: Request, res: Response, next: NextFunction) => void
}
