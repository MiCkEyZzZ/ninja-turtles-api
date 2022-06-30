import { NextFunction, Request, Response } from 'express'

export interface IEpisodeController {
	getAll: (req: Request, res: Response, next: NextFunction) => void
	getSingle: (req: Request, res: Response, next: NextFunction) => void
}
