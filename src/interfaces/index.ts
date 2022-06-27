import { Request, Response, NextFunction, Router } from 'express'
import { Logger } from 'tslog'
import { Container } from 'inversify'
import { App } from '../app'

export interface IControllerRoute {
	path: string
	func: (req: Request, res: Response, next: NextFunction) => void
	method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>
}

export interface IExeptionFilter {
	catch(err: Error, req: Request, res: Response, next: NextFunction): void
}

export interface ILogger {
	logger: Logger

	log: (...args: unknown[]) => void

	error: (...args: unknown[]) => void

	warn: (...args: unknown[]) => void
}

export interface ICharacterController {
	getAll: (req: Request, res: Response, next: NextFunction) => void
	getSingle: (req: Request, res: Response, next: NextFunction) => void
	createSingle: (req: Request, res: Response, next: NextFunction) => void
}

export interface ILocationController {
	getAll: (req: Request, res: Response, next: NextFunction) => void
	getSingle: (req: Request, res: Response, next: NextFunction) => void
	createSingle: (req: Request, res: Response, next: NextFunction) => void
}

export interface IEpisodeController {
	getAll: (req: Request, res: Response, next: NextFunction) => void
	getSingle: (req: Request, res: Response, next: NextFunction) => void
	createSingle: (req: Request, res: Response, next: NextFunction) => void
}

export interface IBootStrapReturn {
	appContainer: Container
	app: App
}

export type ExpressReturnType = Response<any, Record<string, any>>
