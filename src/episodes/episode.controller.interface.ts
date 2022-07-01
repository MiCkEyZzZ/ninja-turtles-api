import { Request, Response, NextFunction } from 'express'

export interface IEpisodeController {
	getAll: (req: Request, res: Response, next: NextFunction) => void
	getSingle: (req: Request, res: Response, next: NextFunction) => void
}
