import { NextFunction, Request, Response } from 'express'

export interface ICharacterController {
	getAll: (req: Request, res: Response, next: NextFunction) => void
	getSingle: (req: Request, res: Response, next: NextFunction) => void
}
