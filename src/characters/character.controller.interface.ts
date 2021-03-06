import { Request, Response, NextFunction } from 'express'

export interface ICharacterController {
	getAll: (req: Request, res: Response, next: NextFunction) => void
	getSingle: (req: Request, res: Response, next: NextFunction) => void
}
