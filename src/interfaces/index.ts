import { Request, Response, NextFunction } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { Logger } from 'tslog'
import { Container } from 'inversify'

import { App } from '../app'

export interface IExeptionFilter {
	catch(err: Error, req: Request, res: Response, next: NextFunction): void
}

export interface ILogger {
	logger: Logger

	log: (...args: unknown[]) => void

	error: (...args: unknown[]) => void

	warn: (...args: unknown[]) => void
}

export interface IBootStrapReturn {
	appContainer: Container
	app: App
	server: ApolloServer
}

export type ExpressReturnType = Response<any, Record<string, any>>

interface ICredentialsTypes {
	id: number
	name: string
	type: string
	image_cover: string
	url: string
	createdAt: string
}

export interface ICharacter extends ICredentialsTypes {
	species: string
	status: string
	locationId: number
	location: Location
	occupation: string
	gender: string
	episode: IEpisode[]
	weapons: string[]
	bandana_color: string
	affiliation: string
}

export interface ILocation extends ICredentialsTypes {
	dimension: string
	residents?: ICharacter[]
}

export interface IEpisode extends ICredentialsTypes {
	episode: string
	producers: string[]
	season: string
	air_date: string
	characters?: ICharacter[]
}

export interface ICharacters {
	info: Info
	data: ICharacter[]
}

export interface ILocations {
	info: Info
	data: ILocation[]
}

export interface IEpisodes {
	info: Info
	data: IEpisode[]
}

export type Info = {
	count: number
	pages: number
	next: number
	prev: number
}

interface ICommonPageEntity {
	page: number
}

interface ICommonFilterEntity {
	name: string
	type: string
}

interface ICommonEntityId {
	id: number
}

export interface FilterParametersCharacters extends ICommonPageEntity {
	filter: FilterCharacter
}

export type FilterParameterCharacter = ICommonEntityId

export interface FilterParametersLocations extends ICommonPageEntity {
	filter: FilterLocation
}

export type FilterParameterLocation = ICommonEntityId

export interface FilterParametersEpisodes extends ICommonPageEntity {
	filter: FilterEpisode
}

export type FilterParameterEpisode = ICommonEntityId

export interface FilterCharacter extends ICommonFilterEntity {
	status: string
	species: string
	gender: string
}

export interface FilterLocation extends ICommonFilterEntity {
	dimension: string
}

export interface FilterEpisode extends ICommonFilterEntity {
	episodes: string
}
